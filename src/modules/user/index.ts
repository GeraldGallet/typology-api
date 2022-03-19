import { makeUserController, UserControllerInterface } from './controllers/user.controller';
import { UserModule } from './interfaces/user-module.interface';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

export const makeUserModule: () => UserModule = (): UserModule => {
  const repository: UserRepository = new UserRepository();

  const service: UserService = new UserService(repository);

  const controller: UserControllerInterface = makeUserController(service);

  return { controller };
};
