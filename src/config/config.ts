import * as dotenv from 'dotenv';

import { ApplicationConfigurationInterface } from '@/modules/core/interfaces/application-configuration.interface';

dotenv.config();

export const appConfig: ApplicationConfigurationInterface = {
  database: {
    name: process.env.DATABASE_NAME,
    provider: process.env.DATABASE_PROVIDER_NAME,
    url: process.env.DATABASE_URL,
  },
  env: process.env.NODE_ENV,
  port: Number(process.env.PORT),
};
