import { gql } from "@apollo/client";

//받아오는 영역입니다. TypeDetails 영역

export const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;
