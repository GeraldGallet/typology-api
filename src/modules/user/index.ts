import { LoggerService } from '@/modules/logger';
import { UserController } from './controllers/user.controller';
import { UserModule } from './interfaces/user-module.interface';
import { UserRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';

export const makeUserModule: () => UserModule = (): UserModule => {
  const repository: UserRepository = new UserRepository();
  const service: UserService = new UserService(repository, new LoggerService('user', process.env.NODE_ENV));
  const controller: UserController = new UserController(service, new LoggerService('user', process.env.NODE_ENV));

  return {
    controller: controller.get(),
  };
};
