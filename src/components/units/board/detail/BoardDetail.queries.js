import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      createdAt
      dislikeCount
    }
  }
`;
export const BOARD_LIKE = gql`
  mutation likeBoard($boardId: ID!) {
    # 첫째줄에 boardID는 인자값, ID!는 타입
    likeBoard(boardId: $boardId)
    #둘째줄의 boardID는 인자이름, $는 앞에 설정했떤 인자의타입값.
  }
`;

export const BOARD_DISLIKE = gql`
  mutation dislikeBoard($boardId: ID!) {
    # 첫째줄에 boardID는 인자값, ID!는 타입
    dislikeBoard(boardId: $boardId)
    #둘째줄의 boardID는 인자이름, $는 앞에 설정했떤 인자의타입값.
  }
`;
