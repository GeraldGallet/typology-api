import { appConfig } from '@/config/config';
import { ApplicationModulesInterface } from '@/modules/core/interfaces/application-modules.interface';
import { LoggerService } from '@/modules/logger';
import { makeUserModule } from '@/modules/user';

const logger: LoggerService = new LoggerService('server', appConfig.env);
logger.prefix = 'global';

export const modules: ApplicationModulesInterface = {
  logger,
  user: makeUserModule(),
};
