import { ReadUserRequestInterface } from '@/modules/user/interfaces/requests/read-user-request.interface';
import { UserInterface } from '@/modules/user/interfaces/entities/user.interface';
import { UserService } from '@/modules/user/services/user.service';

export interface UserControllerInterface {
  user: (data: ReadUserRequestInterface) => UserInterface;
}

export const makeUserController: (_service: UserService) => UserControllerInterface = (
  _service: UserService,
): UserControllerInterface => {
  const user: UserControllerInterface['user'] = ({ id }: ReadUserRequestInterface): UserInterface => {
    return _service.read(id);
  };

  return { user };
};
