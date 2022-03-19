import { Server } from 'http';
import * as supertest from 'supertest';

import { bootstrap } from '@/server';

class TestingModule {
  private _server: Server;
  private _testingApp: supertest.SuperTest<supertest.Test>;
  private _oldEnv = process.env;

  public init(): void {
    this._server = bootstrap();
    this._testingApp = supertest(this._server);
    process.env = {
      ...this._oldEnv,
      NODE_ENV: 'test',
    };
  }

  public getTestingApp(): supertest.SuperTest<supertest.Test> {
    return this._testingApp;
  }

  public close(): void {
    process.env = this._oldEnv;

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
