import { UserInterface } from '@/modules/user/interfaces/entities/user.interface';

export interface CreateUserRequestInterface {
  input: Omit<UserInterface, '_id'>;
}
