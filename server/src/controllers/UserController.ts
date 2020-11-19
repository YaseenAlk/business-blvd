import { User } from '../models/User';
import { UserRepository } from '../repositories/UserRepository';

class UserController {
  signIn(session: any, username: string) {
    const account = UserRepository.findOneByUsername(username);
    session.userID = account.userID;
    return {
      message: `Successfully logged in! Welcome ${username}.`,
      userId: account.userID,
      username: account.username,
    };
  }

  signOut(session: any) {
    session.userID = undefined;
    // we don't say their name on Goodbye for security reasons (e.g. if they were logged in on a public computer)
    return { message: 'Successfully logged out.' };
  }

  getLoginStatus(session: any) {
    const sessionId = session.userID;
    const account = UserRepository.findOneByID(sessionId);
    const response: any = {
      message: `You are ${sessionId ? '' : 'not'} signed in ${sessionId ? ` as ${account.username}` : '.'}`,
      signedIn: sessionId ? true : false,
    };
    if (sessionId) {
      response.userId = account.userID;
      response.username = account.username;
    }
    return response;
  }
}

export = new UserController();
