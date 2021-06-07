import { useQuery, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./Board.List.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./Board.List.queries";
import { useState, useEffect } from "react";
const BoardList = () => {
  const client = useApolloClient();
  const [search, setSearch] = useState("");
  //빈따옴표 값은 문자열이란 뜻
  //스테이트순서가 위에있어야 아래 useQuery로 인자를 보낼때 사용할수있다.

  const [currentPage, setCurrentPage] = useState(1);
  //스테이트값이 변경이 되면, 다시 재랜더가되서, currentPage 2,3,4,5 등으로 변경이되고, 아래로 코드가 실행
  //아래 함수에서 currentPage값이 변경됨에 따라 FetchBoards가 다시실행되어 각각에 해당되는 페이지값을 다시 받아오게 된다.
  // Queries의 Fetch_Boards가 계속 재 실행.

  const { data, loading, refetch } = useQuery(FETCH_BOARDS, {
    variables: { page: currentPage, search: search },
  });
  console.log(data);

  const { data: boardCount, loading: boardsLoding } = useQuery(
    FETCH_BOARDS_COUNT,
    {}
    //이 데이터를 다 불러왔을때만 사용 할 수 있게끔 설정
  );
  console.log(boardCount);
  //검색어를 입력했을때, 스테이트로 계속 저장. 완성된 제목은 'search'라는 형태로 onClickSearchBox에서 활용
  const saveSearch = (event) => {
    setSearch(event.target.value);
  };
  //검색버튼을 클릭했을때 리패치
  const onClickSearchBox = () => {
    refetch({ search: search });
  };
  //페이지넘버를 클릭했을때 리패치
  const PageArr = new Array(11);

  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => <button>{data}</button>);

  const onClickPage1 = (event) => {
    setCurrentPage(Number(event.target.id));
    // refetch(Number(event.target.id));
    // console.log(event.target.id);
  };

  if (loading === false && boardsLoding === false) {
    //let은 변수로 할당해주기 위해 사용
    let totalPage = Math.floor(boardCount.fetchBoardsCount / 10);
    if (totalPage !== 0) {
      totalPage = totalPage + 1;
    }
    console.log(totalPage);
    // 데이터 조회가 완료됐을 때 === false
    // 보드로딩 조회가 완료됐을 때만 실행되게끔 해주는 것
    return (
      <BoardListUI
        data={data.fetchBoards}
        boardCount={boardCount}
        saveSearch={saveSearch}
        onClickSearchBox={onClickSearchBox}
        onClickPage1={onClickPage1}

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
