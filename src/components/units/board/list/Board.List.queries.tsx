import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  mutation fetchBoard($fetchBoardInput: FetchBoardInput!) {
    fetchBoard(fetchBoardInput: $fetchBoardInput) {
        _id,
      title,
      writer,
      date,
      
    }
  }
`;