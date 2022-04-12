import { EntityInterface } from './entity.interface';

export interface BaseRepositoryInterface {
  init(): Promise<void>;
  insert<TEntity extends EntityInterface>(collection: string, entity: Omit<TEntity, '_id'>): Promise<string>;
  read<TEntity extends EntityInterface>(collection: string, id: string): Promise<TEntity | undefined>;
}
