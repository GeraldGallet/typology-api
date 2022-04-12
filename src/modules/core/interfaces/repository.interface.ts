import { EntityInterface } from '@/modules/core/modules/database/interfaces/entity.interface';

export interface RepositoryInterface<TEntity extends EntityInterface> {
  create(entity: Omit<TEntity, '_id'>): Promise<string>;
  read(id: string): Promise<TEntity | undefined>;
}
