import { gql } from "@apollo/client";

//받아오는 영역입니다. TypeDetails 영역

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
      email
      name
    }
  }
`;
