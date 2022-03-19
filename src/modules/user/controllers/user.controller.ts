import { ReadUserRequestInterface } from '@/modules/user/interfaces/requests/read-user-request.interface';
import { UserInterface } from '@/modules/user/interfaces/entities/user.interface';
import { UserService } from '@/modules/user/services/user.service';
import { LoggerService } from '@/modules/logger';

export interface UserControllerInterface {
  user: (data: ReadUserRequestInterface) => UserInterface;
}

export class UserController {
  private _logger: LoggerService;
  private _service: UserService;

  constructor(userService: UserService, logger: LoggerService) {
    this._service = userService;
    this._logger = logger;

    this._logger.prefix = 'controller';
  }

  public user({ id }: ReadUserRequestInterface): UserInterface {
    this._logger.debug(`Getting user with ID '${id}'`);

    return this._service.read(id);
  }

  public get(): UserControllerInterface {
    return {
      user: (data: ReadUserRequestInterface) => this.user(data),
    };
  }
}
