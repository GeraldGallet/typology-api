import { Server } from 'http';
import * as express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema, GraphQLSchema } from 'graphql';

export const bootstrap: () => Server = (): Server => {
  // Construct a schema, using GraphQL schema language
  const schema: GraphQLSchema = buildSchema(`
    type Query {
      hello: String
    }
  `);

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
      rootValue: root,
      graphiql: true,
    }),
  );

  const server: Server = app.listen(4000);
  console.log('GraphQL server started on port 4000');

  return server;
};
