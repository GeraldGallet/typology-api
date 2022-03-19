import { UserInterface } from '@/modules/user/interfaces/entities/user.interface';

export class UserRepository {
  private _users: UserInterface[];

  constructor() {
    this._users = [
      {
        email: 'gerald.gallet.gg@gmail.com',
        firstName: 'Gérald',
        id: '1',
        lastName: 'Gallet',
      },
      {
        email: 'camille.caloin@yahoo.com',
        firstName: 'Camille',
        id: '2',
        lastName: 'Caloin',
      },
    ];
  }

  public read(id: string): UserInterface {
    const entity: UserInterface = this._users.find((user: UserInterface): boolean => user.id === id);

    return entity;
  }
}
