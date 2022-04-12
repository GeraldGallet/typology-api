import type { ApplicationConfigurationInterface } from '@/modules/core/interfaces/application-configuration.interface';
import type { BaseRepositoryInterface } from '@/modules/core/modules/database/interfaces/base-repository.interface';
import { MongoDbRepository } from '@/modules/core/modules/database/modules/mongodb/repositories/base.repository';

export function getDatabaseModuleHelper(
  config: ApplicationConfigurationInterface['database'],
): BaseRepositoryInterface {
  switch (config.provider) {
    case 'MONGO_DB':
    default:
      return new MongoDbRepository(config.name, config.url);
  }
}
