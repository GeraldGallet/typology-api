import { Server } from 'http';
import { MongoClient } from 'mongodb';
import * as dotenv from 'dotenv';
import * as supertest from 'supertest';

import { bootstrap } from '@/server';

import { createUserHelpers, deleteUsersHelpers } from './helpers/users.helper';

dotenv.config();

class TestingModule {
  private _databaseClient: MongoClient;
  private _server: Server;
  private _testingApp: supertest.SuperTest<supertest.Test>;
  private _oldEnv = process.env;

  public async init(): Promise<void> {
    process.env = {
      ...this._oldEnv,
      DATABASE_NAME: process.env.TEST_DATABASE_NAME,
      NODE_ENV: 'test',
    };

    this._server = bootstrap();
    this._testingApp = supertest(this._server);

    this._databaseClient = new MongoClient(process.env.DATABASE_URL);
    await this._databaseClient.connect();
  }

  public getDatabaseClient(): MongoClient {
    return this._databaseClient;
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

beforeAll(async () => {
  await testingModule.init();

  await createUserHelpers(testingModule.getDatabaseClient().db(process.env.DATABASE_NAME).collection('user'));
});

afterAll(async () => {
  await deleteUsersHelpers(testingModule.getDatabaseClient().db(process.env.DATABASE_NAME).collection('user'));

  testingModule.close();
});
