import { UserCreate, User } from '../models/user';
import { UserRepository } from '../repositories/userRepo';

export class UserService {
  constructor(private repo = new UserRepository()) {}
  list(): User[] { return this.repo.list(); }
  get(id: number): User | undefined { return this.repo.findById(id); }
  create(payload: UserCreate): User { return this.repo.create(payload); }
}