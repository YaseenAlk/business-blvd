import { User } from '../models/User';

class UserRepository {
  findOneByID(uuid: string): Promise<User | undefined> {
    return User.findOne({ id: uuid });
  }

  findOneByUsername(username: string): Promise<User | undefined> {
    return User.findOne({ _username: username });
  }

  findOneByEmail(email: string): Promise<User | undefined> {
    return User.findOne({ _email: email });
  }

  addOne(email: string, username: string, password: string): Promise<User> {
    const newUser: User = new User(email, username, password);
    return newUser.save();
  }

  deleteOneById(id: string) {
    return User.findOne({ id: id }).then((user) => {
      if (user === undefined) return;
      return user.remove();
    });
  }
}

export = new UserRepository();
