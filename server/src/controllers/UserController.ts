import { User } from '../models/User';
import UserRepository from '../repositories/UserRepository';
import { v4 as uuidv4 } from 'uuid';

class UserController {
  // eslint-disable-next-line
  signIn(session: any, username: string) {
    const account = UserRepository.findOneByUsername(username);
    session.userID = account.id;
    return {
      message: `Successfully logged in! Welcome ${username}.`,
      userId: account.id,
      username: account.username,
    };
  }

  // eslint-disable-next-line
  signOut(session: any) {
    session.userID = undefined;
    // we don't say their name on Goodbye for security reasons (e.g. if they were logged in on a public computer)
    return { message: 'Successfully logged out.' };
  }

  // eslint-disable-next-line
  getLoginStatus(session: any) {
    const sessionId = session.userID;
    const account = UserRepository.findOneByID(sessionId);
    const response: { message: string; signedIn: boolean; userId?: string; username?: string } = {
      message: `You are ${sessionId ? '' : 'not'} signed in ${sessionId ? ` as ${account.username}` : '.'}`,
      signedIn: sessionId ? true : false,
    };
    if (sessionId) {
      response.userId = account.id;
      response.username = account.username;
    }
    return response;
  }

  createAccount(email: string, username: string, password: string) {
    const userID = uuidv4(); // this ID is internal so it's okay for it to be a long string

    UserRepository.addOne(userID, email, username, password);
    return { message: 'Account created succesfully!' };
  }
}

export = new UserController();
