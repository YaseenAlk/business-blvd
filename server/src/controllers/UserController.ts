import UserRepository from '../repositories/UserRepository';

class UserController {
  async signIn(username: string) {
    const account = await UserRepository.findOneByUsername(username);
    return {
      message: `Successfully logged in! Welcome ${username}.`,
      userId: account?.id,
      username: account?.username,
    };
  }

  signOut() {
    // we don't say their name on Goodbye for security reasons (e.g. if they were logged in on a public computer)
    return { message: 'Successfully logged out.' };
  }

  async getLoginStatus(sessionId?: string) {
    const account = sessionId ? await UserRepository.findOneByID(sessionId) : undefined;
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

  async createAccount(email: string, username: string, password: string) {
    const user = await UserRepository.addOne(email, username, password);
    return { message: 'Account created succesfully!', userId: user.id };
  }

  async deleteAccount(sessionID: string) {
    await UserRepository.deleteOneById(sessionID);
    return { message: 'Account deleted.' };
  }
}

export = new UserController();
