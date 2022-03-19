import { buildSchema, GraphQLSchema } from 'graphql';

import { schema as userSchema } from '@/modules/user/schemas/user.schema';

const rootSchema: string = `
  ${userSchema}

  type Query {
    hello: String
    user(id: String): User
  }
`;

export const schema: GraphQLSchema = buildSchema(rootSchema);
