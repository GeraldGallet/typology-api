import { BaseRepositoryInterface } from '@/modules/core/modules/database/interfaces/base-repository.interface';
import { LoggerService } from '@/modules/logger';
import { UserModule } from '@/modules/user/interfaces/user-module.interface';

export interface ApplicationModulesInterface {
  database: BaseRepositoryInterface;
  logger: LoggerService;
  user: UserModule;
}
