import { Server } from 'http';
import * as supertest from 'supertest';

import { bootstrap } from '@/server';

class TestingModule {
  private _server: Server;
  private _testingApp: supertest.SuperTest<supertest.Test>;

  public init(): void {
    this._server = bootstrap();
    this._testingApp = supertest(this._server);
  }

  public getTestingApp(): supertest.SuperTest<supertest.Test> {
    return this._testingApp;
  }

  public close(): void {
    this._server.close();
  }
}

export const testingModule: TestingModule = new TestingModule();

beforeAll(() => {
  testingModule.init();
});

afterAll(() => {
  testingModule.close();
});
