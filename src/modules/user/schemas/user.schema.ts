export const schema: string = `
  type User {
    _id: String,
    email: String,
    firstName: String,
    lastName: String,
  }

  input CreateUserRequest {
    email: String,
    firstName: String,
    lastName: String,
  }
`;

export const query: string = `
  user(_id: String): User
`;

export const mutation: string = `
  createUser(input: CreateUserRequest): User
`;
