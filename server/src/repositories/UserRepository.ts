import { User } from '../models/User';

// this is a temporary class until we switch to data persistence
// once we switch to a DB, might not be necessary because we can use typeorm repositories

// however we could still use it to generalize more advanced DB operations

class UserRepository {
  private data: User[] = [];

  findOneByID(uuid: string): User {
    return this.data.filter((user) => user.id === uuid)[0];
  }

  findOneByUsername(username: string): User {
    return this.data.filter((user) => user.username === username)[0];
  }

  findOneByEmail(email: string): User {
    return this.data.filter((user) => user.email === email)[0];
  }

  addOne(id: string, email: string, username: string, password: string) {
    this.data.push(new User(id, email, username, password));
  }
}

export = new UserRepository();
