import { LoggerService } from '@/modules/logger';
import { UserModule } from '@/modules/user/interfaces/user-module.interface';

export interface ApplicationModulesInterface {
  logger: LoggerService;
  user: UserModule;
}
