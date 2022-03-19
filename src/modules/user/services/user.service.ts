import { UserInterface } from '@/modules/user/interfaces/entities/user.interface';
import { UserRepository } from '@/modules/user/repositories/user.repository';

export class UserService {
  private _repository: UserRepository;

  constructor(repository: UserRepository) {
    this._repository = repository;
  }

  public read(id: string): UserInterface {
    const user: UserInterface = this._repository.read(id);

    return user;
  }
}
