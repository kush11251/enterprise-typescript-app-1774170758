import { User, UserCreate } from '../models/user';

const users: User[] = [{ id: 1, username: 'alpha', email: 'alpha@example.com', active: true }];

export class UserRepository {
  list(): User[] { return [...users]; }
  findById(id: number): User | undefined { return users.find(u => u.id === id); }
  create(payload: UserCreate): User {
    const newUser: User = { id: users.length + 1, ...payload, active: true };
    users.push(newUser);
    return newUser;
  }
}