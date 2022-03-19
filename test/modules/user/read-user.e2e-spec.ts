import { Response } from 'superagent';

import { shouldFindUserFixture, shouldNotFindUserFixture } from '@test/modules/user/fixtures/user.fixtures';
import { testingModule } from '@test/config/setup';

describe('GET /user', (): void => {
  it('should find a user', async (): Promise<void> => {
    const result: Response = await testingModule
      .getTestingApp()
      .get('/graphql')
      .send({
        query: shouldFindUserFixture.query,
      })
      .expect(200);

    expect(result.body.data).toEqual(shouldFindUserFixture.result);
  });

  it('should not find a user', async (): Promise<void> => {
    const result: Response = await testingModule
      .getTestingApp()
      .get('/graphql')
      .send({
        query: shouldNotFindUserFixture.query,
      })
      .expect(200);

    expect(result.body.data).toEqual(shouldNotFindUserFixture.result);
  });
});
