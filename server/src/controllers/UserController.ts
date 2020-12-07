import { User } from '../models/User';
import UserRepository from '../repositories/UserRepository';
import { ReturnObj } from './Common';

class UserController {
  signIn(username: string): Promise<ReturnObj & { userId?: string; username?: string }> {
    return UserRepository.findOneByUsername(username).then((account) => {
      return {
        status: 200,
        message: `Successfully logged in! Welcome ${username}.`,
        userId: account?.id,
        username: account?.username,
      };
    });
  }

  signOut() {
    // we don't say their name on Goodbye for security reasons (e.g. if they were logged in on a public computer)
    return { message: 'Successfully logged out.' };
  }

  getLoginStatus(sessionId?: string): Promise<ReturnObj & { userId?: string; username?: string }> {
    const promise = sessionId ? UserRepository.findOneByID(sessionId) : Promise.resolve(undefined);
    return promise.then((account) => {
      const response: ReturnObj & { signedIn: boolean; userId?: string; username?: string } = {
        status: 200,
        message: `You are ${sessionId ? '' : 'not'} signed in ${sessionId ? `as ${account?.username}.` : '.'}`,
        signedIn: sessionId ? true : false,
      };
      if (account) {
        response.userId = account?.id;
        response.username = account?.username;
      }
      return response;
    });
  }

  createAccount(email: string, username: string, password: string): Promise<ReturnObj & { userId: string }> {
    return UserRepository.addOne(email, username, password).then((user) => {
      return { status: 200, message: 'Account created succesfully!', userId: user.id };
    });
  }

  deleteAccount(sessionID: string): Promise<ReturnObj> {
    return UserRepository.deleteOneById(sessionID).then(() => {
      return { status: 200, message: 'Account deleted.' };
    });
  }

  // might decide to move this to the BusinessController
  getClaimedBusinesses(userId: string): Promise<ReturnObj & { data: string[] }> {
    return UserRepository.getOwnedBusinesses(userId).then((businesses) => {
      return { status: 200, data: businesses };
    });
  }

  updateAccount(
    userId: string,
    newUsername?: string,
    newEmail?: string,
    newPassword?: string,
  ): Promise<ReturnObj | (ReturnObj & { userId: string })> {
    return UserRepository.updateOne(userId, newUsername, newEmail, newPassword).then((user: User | undefined) => {
      return user
        ? { status: 200, message: 'Account updated succesfully!', userId: user?.id }
        : { status: 404, message: 'Account not found' };
    });
  }
}

export = new UserController();
