import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      tags
    }
  }
`;

// export const FETCH_BOARD_COMMENT = gql`
//   query fetchBoardComments($boardId: ID!) {
//     fetchBoardComments(boardId: $boardId) {
//       _id
//       writer
//       contents
//       rating
//       createdAt
//       updatedAt
//     }
//   }
// `;
