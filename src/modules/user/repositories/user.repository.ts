import type { BaseRepositoryInterface } from '@/modules/core/modules/database/interfaces/base-repository.interface';
import type { RepositoryInterface } from '@/modules/core/interfaces/repository.interface';
import type { UserInterface } from '@/modules/user/interfaces/entities/user.interface';

export class UserRepository implements RepositoryInterface<UserInterface> {
  constructor(private readonly _baseRepository: BaseRepositoryInterface, private readonly _collectionName: string) {}

  public async create(entity: Omit<UserInterface, '_id'>): Promise<string> {
    const insertedId: string = await this._baseRepository.insert(this._collectionName, entity);

    return insertedId;
  }

  public async read(_id: string): Promise<UserInterface> {
    const entity: UserInterface = await this._baseRepository.read<UserInterface>(this._collectionName, _id);

    return entity;
  }
}
