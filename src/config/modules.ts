import type { ApplicationModulesInterface } from '@/modules/core/interfaces/application-modules.interface';
import type { BaseRepositoryInterface } from '@/modules/core/modules/database/interfaces/base-repository.interface';
import { appConfig } from '@/config/config';
import { getDatabaseModuleHelper } from '@/modules/core/helpers/get-database-module.helper';
import { LoggerService } from '@/modules/logger';
import { makeUserModule } from '@/modules/user';

const logger: LoggerService = new LoggerService('server', appConfig.env);
logger.prefix = 'global';

const databaseModule: BaseRepositoryInterface = getDatabaseModuleHelper(appConfig.database);
databaseModule.init();

export const modules: ApplicationModulesInterface = {
  database: databaseModule,
  logger,
  user: makeUserModule(databaseModule),
};
