import type { UserInterface } from '@/modules/user/interfaces/entities/user.interface';
import { LoggerService } from '@/modules/logger';
import { UserRepository } from '@/modules/user/repositories/user.repository';

export class UserService {
  private _loggerService: LoggerService;
  private _repository: UserRepository;

  constructor(repository: UserRepository, loggerService: LoggerService) {
    this._repository = repository;
    this._loggerService = loggerService;

    this._loggerService.prefix = 'service';
  }

  public async create(entity: Omit<UserInterface, '_id'>): Promise<UserInterface> {
    const insertedId: string = await this._repository.create(entity);

    return this.read(insertedId);
  }

  public async read(_id: string): Promise<UserInterface> {
    this._loggerService.debug(`Getting user with ID '${_id}'`);

    const user: UserInterface = await this._repository.read(_id);

    return user;
  }
}
