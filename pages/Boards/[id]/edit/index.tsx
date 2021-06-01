import BoardEdit from "../../../../src/components/units/board/edit/BoardEdit.container";

const BoardEditPage = () => {
  // const UPDATE_BOARD = gql`
  //   mutation updateBoard($updateBoard: updateBoard!) {
  //     updateBoard(updateBoardInput: $updateBoardInput) {
  //     _id
  //   writer
  //   title
  //   contents
  //   likeCount
  //   dislikeCount
  //   createdAt
  //   updatedAt
  //   deletedAt
  //   }
  //   }
  // `;

  // const router = useRouter();
  // const { data } = useQuery(UPDATE_BOARD, {
  //   variables: { updateBoard: router.mutation.id },
  // });

  return <BoardEdit />;
};

export default BoardEditPage;
