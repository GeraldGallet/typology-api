import { Collection, ObjectId, OptionalId } from 'mongodb';

import { userFixtures } from '@test/config/fixtures/users.fixture';
import { UserInterface } from '@/modules/user/interfaces/entities/user.interface';

export async function createUserHelpers(collection: Collection): Promise<void> {
  await collection.insertMany(
    userFixtures.map(
      (fixture: UserInterface): OptionalId<Document> =>
        ({
          ...fixture,
          // eslint-disable-next-line no-underscore-dangle
          _id: new ObjectId(fixture._id),
        } as unknown as OptionalId<Document>),
    ),
  );
}

export async function deleteUsersHelpers(collection: Collection): Promise<void> {
  await collection.deleteMany({});
}
