import { User } from '../models/User';

class UserRepository {
  // getters
  findOneByID(uuid: string): Promise<User | undefined> {
    return User.findOne({ id: uuid });
  }

  findOneByUsername(username: string): Promise<User | undefined> {
    return User.findOne({ _username: username });
  }

  findOneByEmail(email: string): Promise<User | undefined> {
    return User.findOne({ _email: email });
  }

  verifyId(id: string): Promise<boolean> {
    return User.findOne({ id }).then((user) => user !== undefined);
  }

  // updaters
  updateOne(id: string, username?: string, email?: string, password?: string): Promise<User | undefined> {
    return User.findOne({ id }).then((user) => {
      if (user) {
        if (username) user.username = username;
        if (email) user.email = email;
        if (password) user.password = password;
      }
      return user?.save();
    });
  }

  clearAllClaimed(): Promise<void> {
    return User.find().then((allUsers) =>
      allUsers.forEach(async (user) => {
        user.owned.forEach((business) => user.unclaimBusiness(business));
        await user.save();
      }),
    );
  }

  addOne(email: string, username: string, password: string): Promise<User> {
    const newUser: User = new User(email, username, password);
    return newUser.save();
  }

  deleteOneById(id: string): Promise<User | undefined> {
    return User.findOne({ id: id }).then((user) => {
      return user?.remove();
    });
  }

  addBusinessOwned(userId: string, businessId: string): Promise<User | undefined> {
    return User.findOne({ id: userId }).then((user) => {
      user?.claimBusiness(businessId);
      return user?.save();
    });
  }

  removeBusinessOwned(userId: string, businessId: string): Promise<User | undefined> {
    return User.findOne({ id: userId }).then((user) => {
      user?.unclaimBusiness(businessId);
      return user?.save();
    });
  }

  getOwnedBusinesses(userId: string): Promise<string[]> {
    return User.findOne({ id: userId }).then((user) => {
      return user ? Array.from(user.owned) : [];
    });
  }

  followBusiness(userId: string, businessId: string): Promise<User | undefined> {
    return User.findOne({ id: userId }).then((user) => {
      user?.followBusiness(businessId);
      return user?.save();
    });
  }

  unfollowBusiness(userId: string, businessId: string): Promise<User | undefined> {
    return User.findOne({ id: userId }).then((user) => {
      user?.unfollowBusiness(businessId);
      return user?.save();
    });
  }
}

export = new UserRepository();
