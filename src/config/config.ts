import * as dotenv from 'dotenv';

import { ApplicationConfigurationInterface } from '@/modules/core/interfaces/application-configuration.interface';

dotenv.config();

export const appConfig: ApplicationConfigurationInterface = {
  env: process.env.NODE_ENV,
  port: Number(process.env.PORT),
};
