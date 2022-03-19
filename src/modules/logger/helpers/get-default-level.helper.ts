import { LogLevelEnum } from '@/modules/logger/enums/log-level.enum';

export const getDefaultLevelHelper: (environment: string) => LogLevelEnum = (environment: string): LogLevelEnum => {
  switch (environment) {
    case 'development':
      return LogLevelEnum.ALL;

    case 'staging':
      return LogLevelEnum.INFO;

    case 'production':
    case 'test':
    default:
      return LogLevelEnum.ERROR;
  }
};
