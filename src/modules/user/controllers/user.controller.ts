import type { CreateUserRequestInterface } from '@/modules/user/interfaces/requests/create-user-request.interface';
import type { ReadUserRequestInterface } from '@/modules/user/interfaces/requests/read-user-request.interface';
import type { UserInterface } from '@/modules/user/interfaces/entities/user.interface';
import { UserService } from '@/modules/user/services/user.service';
import { LoggerService } from '@/modules/logger';

export interface UserControllerInterface {
  createUser: (data: CreateUserRequestInterface) => Promise<UserInterface>;
  user: (data: ReadUserRequestInterface) => Promise<UserInterface>;
}

export class UserController {
  private _logger: LoggerService;
  private _service: UserService;

  constructor(userService: UserService, logger: LoggerService) {
    this._service = userService;
    this._logger = logger;

    this._logger.prefix = 'controller';
  }

  public async createUser(data: Omit<UserInterface, '_id'>): Promise<UserInterface> {
    this._logger.debug('Creating new user');

    const createdUser: UserInterface = await this._service.create(data);

    return createdUser;
  }

  public async user(_id: string): Promise<UserInterface> {
    this._logger.debug(`Getting user with ID '${_id}'`);

    const user: UserInterface = await this._service.read(_id);

    return user;
  }

  public get(): UserControllerInterface {
    return {
      createUser: ({ input }: CreateUserRequestInterface) => this.createUser(input),
      user: ({ _id }: ReadUserRequestInterface) => this.user(_id),
    };
  }
}
