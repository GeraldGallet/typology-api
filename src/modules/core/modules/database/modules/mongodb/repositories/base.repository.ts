import { Collection, Document, InsertOneResult, MongoClient, ObjectId, WithId } from 'mongodb';

import type { BaseRepositoryInterface } from '@/modules/core/modules/database/interfaces/base-repository.interface';
import type { EntityInterface } from '@/modules/core/modules/database/interfaces/entity.interface';

export class MongoDbRepository implements BaseRepositoryInterface {
  private _client: MongoClient;

  constructor(private _databaseName: string, _databaseUrl: string) {
    this._client = new MongoClient(_databaseUrl);
  }

  public async init(): Promise<void> {
    await this._client.connect();
  }

  private _getCollection(collection: string): Collection {
    return this._client.db(this._databaseName).collection(collection);
  }

  public async insert<TEntity extends EntityInterface>(
    collection: string,
    entity: Omit<TEntity, '_id'>,
  ): Promise<string> {
    const createdEntity: InsertOneResult = await this._getCollection(collection).insertOne(entity);

    if (!createdEntity) {
      return undefined;
    }

    return createdEntity.insertedId.toString();
  }

  public async read<TEntity extends EntityInterface>(collection: string, _id: string): Promise<TEntity | undefined> {
    const entity: WithId<Document> = await this._client
      .db(this._databaseName)
      .collection(collection)
      .findOne({ _id: new ObjectId(_id) });

    return entity as unknown as TEntity;
  }
}
