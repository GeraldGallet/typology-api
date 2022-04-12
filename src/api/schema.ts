import { buildSchema, GraphQLSchema } from 'graphql';

import { mutation as userMutation, query as userQuery, schema as userSchema } from '@/modules/user/schemas/user.schema';

const rootSchema: string = `
  ${userSchema}

  type Query {
    hello: String
    ${userQuery}
  }

  type Mutation {
    ${userMutation}
  }
`;

export const schema: GraphQLSchema = buildSchema(rootSchema);
