import { LoggerService } from '@/modules/logger';
import { UserInterface } from '@/modules/user/interfaces/entities/user.interface';
import { UserRepository } from '@/modules/user/repositories/user.repository';

export class UserService {
  private _loggerService: LoggerService;
  private _repository: UserRepository;

  constructor(repository: UserRepository, loggerService: LoggerService) {
    this._repository = repository;
    this._loggerService = loggerService;

    this._loggerService.prefix = 'service';
  }

  public read(id: string): UserInterface {
    this._loggerService.debug(`Getting user with ID '${id}'`);

    const user: UserInterface = this._repository.read(id);

    return user;
  }
}
