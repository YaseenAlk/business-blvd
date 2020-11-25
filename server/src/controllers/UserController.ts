import { User } from '../models/User';
import UserRepository from '../repositories/UserRepository';
import { v4 as uuidv4 } from 'uuid';

class UserController {
  signIn(username: string) {
    const account = UserRepository.findOneByUsername(username);
    return {
      message: `Successfully logged in! Welcome ${username}.`,
      userId: account.id,
      username: account.username,
    };
  }

  signOut() {
    // we don't say their name on Goodbye for security reasons (e.g. if they were logged in on a public computer)
    return { message: 'Successfully logged out.' };
  }

  getLoginStatus(sessionId?: string) {
    const account = sessionId ? UserRepository.findOneByID(sessionId) : undefined;
    const response: { message: string; signedIn: boolean; userId?: string; username?: string } = {
      message: `You are ${sessionId ? '' : 'not'} signed in ${sessionId ? `as ${account?.username}.` : '.'}`,
      signedIn: sessionId ? true : false,
      userId: account?.id, 
      username: account?.username,
    };
    if (sessionId) {
      response.userId = account?.id;
      response.username = account?.username;
    }
    return response;
  }

  createAccount(email: string, username: string, password: string) {
    const userID = uuidv4(); // this ID is internal so it's okay for it to be a long string

    UserRepository.addOne(userID, email, username, password);
    return { message: 'Account created succesfully!', userId: userID };
  }

  deleteAccount(sessionID: string) {
    UserRepository.deleteOneById(sessionID);
    const response = {
      message: 'Account deleted.',
    };
    return response;
  }
}

export = new UserController();
