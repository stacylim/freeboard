import { gql } from "@apollo/client";

export const UPDATE_BOARD = gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!) {
    updateBoard(updateBoardInput: $updateBoardInput) {
      title
      contents
      youtubeURl
    }
  }
`;
