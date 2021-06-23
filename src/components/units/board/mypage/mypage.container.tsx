import MyPageListUI from "./mypage.presenter";

import { useQuery, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEMS } from "./mypage.queries";
import { useState, useEffect } from "react";

const MyPageList = () => {
  const client = useApolloClient();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: currentPage, search: search },
  });

  //   const { data: mypageCount, loading: mypageLoding } = useQuery(
  //     FETCH_BOARDS_COUNT,
  //     {}
  //     //이 데이터를 다 불러왔을때만 사용 할 수 있게끔 설정
  //   );

  return <MyPageListUI data={data} />;
};
export default MyPageList;
