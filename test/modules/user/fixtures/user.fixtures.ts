import { UserInterface } from '@/modules/user/interfaces/entities/user.interface';

export interface UserFixtureInterface<T> {
  query: string;
  result: T;
}

export const shouldFindUserFixture: UserFixtureInterface<{ user: UserInterface }> = {
  query: '{ user(id: "1") { email firstName id lastName } }',
  result: {
    user: {
      email: 'gerald.gallet.gg@gmail.com',
      firstName: 'Gérald',
      id: '1',
      lastName: 'Gallet',
    },
  },
};

export const shouldNotFindUserFixture: UserFixtureInterface<{ user: UserInterface }> = {
  query: '{ user(id: "10") { email firstName id lastName } }',
  result: {
    user: null,
  },
};
