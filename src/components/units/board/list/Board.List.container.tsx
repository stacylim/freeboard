import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD_COMMENT } from "../Comments/BoardComment.queries";
import BoardListUI from "./Board.List.presenter";
import { FETCH_BOARDS } from "./Board.List.queries";
import { useState } from "react";

const BoardList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, loading, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { page: currentPage },
  });
  console.log(currentPage);

  console.log(data);
  // const onClickPage = (event) => {
  //   setCurrentPage(Number(event.target.id));
  // };

  // const onLoadMore = () => {
  //   fetchMore({
  //     variables: { page: data?.fetchBoards.length / 10 },
  //     updateQuery: (prev, { fetchMoreResult }) => ({
  //       fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
  //     }),
  //   });
  // };

  // const router = useRouter();
  // const { data } = useQuery(FETCH_BOARD, {
  //   variables: {
  //     boardId: String(router.query.id),
  //   },
  // });

  if (loading === false) {
    // 데이터 조회가 완료됐을 때 === false
    return (
      <BoardListUI
        data={data.fetchBoards}
        //   // currentPage={currentPage}
        //   onClickPage={onClickPage}
        //   onLoadMore={onLoadMore}
      />
    );
  } else {
    return null;
  }
};

export default BoardList;
