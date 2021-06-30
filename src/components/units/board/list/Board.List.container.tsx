import { useQuery, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./Board.List.presenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./Board.List.queries";
import { useState, useEffect } from "react";

const BoardList = () => {
  const client = useApolloClient();
  const [search, setSearch] = useState("");
  const [block, setBlock] = useState(1);

  //빈따옴표 값은 문자열이란 뜻
  //스테이트순서가 위에있어야 아래 useQuery로 인자를 보낼때 사용할수있다.

  const [currentPage, setCurrentPage] = useState(1);
  //스테이트값이 변경이 되면, 다시 재랜더가되서, currentPage 2,3,4,5 등으로 변경이되고, 아래로 코드가 실행
  //아래 함수에서 currentPage값이 변경됨에 따라 FetchBoards가 다시실행되어 각각에 해당되는 페이지값을 다시 받아오게 된다.
  // Queries의 Fetch_Boards가 계속 재 실행.

  const { data, loading, refetch, fetchMore } = useQuery(FETCH_BOARDS, {
    variables: { page: currentPage, search: search },
  });

  //useQuery에서 제공하는 기본기능, loading이 true일때는 데이터를 불러오고있는 상황.false 일때는 데이터를 다 불러온 상황

  const { data: boardCount, loading: boardsLoding } = useQuery(
    FETCH_BOARDS_COUNT,
    { variables: { page: currentPage, search: search } }
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

  // const onLoadMore = () => {
  //   fetchMore({
  //     variables: { page: Math.floor(data?.fetchBoards.length / 10) + 1 },
  //     updateQuery: (prev, { fetchMoreResult }) => ({
  //       //fetchMore로 데이터를 받아온 후 작업을 해주세요. <div className=""></div>
  //       //fetchMore로 데이터를 받아온 후 작업을 해주세요. <div className=""></div>
  //       fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
  //       //배열을 연결하기위해 스프레드 ....
  //     }),
  //   });
  // };

  if (loading === false && boardsLoding === false) {
    //1. 모든 게시물의 수를 카운트하기, 보드카운트에 값이 있으면, 보드카운트에 페치보드카운트값을 담아주는 것
    //2. 페이지수 = 게시글수에서 /10 한 값의 올림
    //3. 블럭수 = 10씩 나눈 구역의 값.
    const AllCount = boardCount && boardCount.fetchBoardsCount;
    console.log(AllCount);
    const AllPage = Math.ceil(AllCount / 10);
    console.log(AllPage);
    const Blocks = Math.ceil(AllPage / 10);
    console.log(Blocks);

    const PageArray = [];

    const BlockStartPage = block * 10 - 9;
    const BlockEndPage = block * 10 > AllPage ? AllPage : block * 10;

    for (let i = BlockStartPage; i <= BlockEndPage; i++) {
      PageArray.push(i);
      //push는 배열안에 값을 넣을때 넣는 메소드
      //블럭*10> AllPage 보다 크면 ? 트루값 : 아닐시 false값 block*10 값
    }
    console.log(block);

    const prevBlock = block > 1 && AllCount > 0 ? true : false;
    const nextBlock = block !== Blocks ? true : false;

    const moveBlock = (type) => {
      if (type === "prev") {
        setCurrentPage(BlockEndPage);
        setBlock((prev) => prev - 1);
      } else if (type === "next") {
        setCurrentPage(BlockStartPage);
        setBlock((prev) => prev + 1);
      }
    };

    console.log(prevBlock);

    // 마지막페이지가 총페이지보다 클 경우에는 마지막 페이지를 총 페이지로 대신한다.
    //예) 149페이지일 경우 마지막 페이지는 9페이지만 필요하므로, 블럭*10보다 더 작다. 그래서 마지막페이지는 총페이지로 대체

    //let은 변수로 할당해주기 위해 사용
    // let totalPage = Math.floor(boardCount.fetchBoardsCount / 10);
    // if (totalPage !== 0) {
    //   totalPage = totalPage + 1;
    // }
    // console.log(totalPage);

    // 데이터 조회가 완료됐을 때 === false
    // 보드로딩 조회가 완료됐을 때만 실행되게끔 해주는 것
    return (
      <BoardListUI
        data={data?.fetchBoards}
        boardCount={boardCount}
        saveSearch={saveSearch}
        onClickSearchBox={onClickSearchBox}
        onClickPage1={onClickPage1}
        pageArray={PageArray}
        prevBlock={prevBlock}
        nextBlock={nextBlock}
        setBlock={setBlock}
        moveBlock={moveBlock}
        //   onClickPage={onClickPage}
      />
    );
  } else {
    return null;
  }
};

export default BoardList;
