import { gql } from "@apollo/client";

// export const FETCH_BOARDS = gql`
//   query fetchBoard($fetchBoardInput: FetchBoardInput!) {
//     fetchBoard(fetchBoardInput: $fetchBoardInput) {
//       _id
//       title
//       writer
//       date
//     }
//   }
// `;

export const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      writer
      _id
      title
      createdAt
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount($search: String) {
    fetchBoardsCount(search: $search)
  }
`;
