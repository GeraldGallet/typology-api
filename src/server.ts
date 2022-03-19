import { Server } from 'http';
import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';

import { schema } from '@/api/schema';
import { modules } from '@/config/modules';
import { appConfig } from '@/config/config';

export const bootstrap: () => Server = (): Server => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const root: any = {
    hello: () => {
      return 'Hello world!';
    },
  };

  const app: express.Application = express();

  app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      rootValue: { ...root, ...modules.user.controller },
      graphiql: true,
    }),
  );

  const server: Server = app.listen(appConfig.port);

  modules.logger.info(`GraphQL server started on port ${appConfig.port}`);
  return server;
};
