import { Server } from 'http';
import * as dotenv from 'dotenv';
import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';

import { schema } from '@/api/schema';
import { makeUserModule } from '@/modules/user';
import { UserModule } from '@/modules/user/interfaces/user-module.interface';

dotenv.config();

export const bootstrap: () => Server = (): Server => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const root: any = {
    hello: () => {
      return 'Hello world!';
    },
  };

  const userModule: UserModule = makeUserModule();

  const app: express.Application = express();

  app.use(
    '/graphql',
    graphqlHTTP({
      schema: schema,
      rootValue: { ...root, ...userModule.controller },
      graphiql: true,
    }),
  );

  const port: number = Number(process.env.PORT);
  const server: Server = app.listen(port);

  console.log(`GraphQL server started on port ${port}`);
  return server;
};
