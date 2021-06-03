import { gql } from "@apollo/client";

export const EDIT_BOARD = gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!) {
    updateBoard(updateBoardInput: $updateBoardInput) {
      title
      contents
      youtubeURl
    }
  }
`;
