import { Response } from 'superagent';

import { testingModule } from '@test/config/setup';

import { appConfig } from '@/config/config';

describe('GET /', (): void => {
  it('should launch server and prepare test environment', async (): Promise<void> => {
    const result: Response = await testingModule
      .getTestingApp()
      .get('/graphql')
      .send({
        query: '{ hello }',
      })
      .expect(200);

    expect(result.body.data.hello).toBe('Hello world!');
    expect(appConfig.env).toEqual('test');
  });
});
