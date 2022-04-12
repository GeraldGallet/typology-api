import { UserInterface } from '@/modules/user/interfaces/entities/user.interface';

export interface UserFixtureInterface<T> {
  query: string;
  result: T;
}

export const shouldFindUserFixture: UserFixtureInterface<{ user: Partial<UserInterface> }> = {
  query: '{ user(_id: "012345678910") { email firstName lastName } }',
  result: {
    user: {
      email: 'user.1@email.com',
      firstName: 'User',
      lastName: 'One',
    },
  },
};

export const shouldNotFindUserFixture: UserFixtureInterface<{ user: Partial<UserInterface> }> = {
  query: '{ user(_id: "10") { email firstName lastName } }',
  result: {
    user: null,
  },
};
