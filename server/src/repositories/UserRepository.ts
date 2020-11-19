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
}

export = new UserRepository();
