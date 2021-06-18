import { gql } from "@apollo/client";

export const FETCH_USED_ITEM_QUESTIONS = gql`
  query fetchusedquestions($page: Int, $useditemId: ID!) {
    fetchusedquestions(page: $page) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;

// export const CREATE_BOARD_COMMENT = gql`
//   mutation createBoardComment(
//     $createBoardCommentInput: CreateBoardCommentInput!
//     $boardId: ID!
//   ) {
//     createBoardComment(
//       createBoardCommentInput: $createBoardCommentInput
//       boardId: $boardId
//     ) {
//       _id
//       writer
//       contents
//       rating
//       createdAt
//       updatedAt
//       deletedAt
//     }
//   }
// `;

export const CREATE_USED_ITEM_QUESTION = gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    CreateUseditemQuestionInput(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
      writer
      contents
      rating
      user
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

// export const DELETE_BOARD_COMMENT = gql`
//   mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
//     deleteBoardComment(password: $password, boardCommentId: $boardCommentId)

//     # // 받는게 객체가 아니고 하나이기때문에, 중괄호가 필요하지만, 이 경우에는 stringtypeID!하나만 존재하므로, 중괄호를 열어서 쓸 필요가없다.
//   }
// `;

// export const UPDATE_BOARD_COMMENT = gql`
//   mutation updateBoardComment(
//     $updateBoardCommentInput: UpdateBoardCommentInput!
//     $password: String
//     $boardCommentId: ID!
//   ) {
//     updateBoardComment(
//       updateBoardCommentInput: $updateBoardCommentInput
//       password: $password
//       boardCommentId: $boardCommentId
//     ) {
//       _id
//       writer
//       contents
//       rating
//       createdAt
//       updatedAt
//       deletedAt
//     }
//   }
// `;
