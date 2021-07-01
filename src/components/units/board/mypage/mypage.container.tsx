import MyPageListUI from "./mypage.presenter";

import { useQuery, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEMS, FETCH_USED_ITEMS_ISOLD } from "./mypage.queries";
import { useState, useEffect } from "react";

const MyPageList = () => {
  const client = useApolloClient();
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: dataISold,

    refetch,
    fetchMore,
  } = useQuery(FETCH_USED_ITEMS_ISOLD, {
    variables: { page: currentPage, search: search },
  });

  const { data, loading } = useQuery(FETCH_USED_ITEMS, {
    variables: { page: currentPage, search: search },
  });

  return <MyPageListUI data={data} dataISold={dataISold} />;
};
export default MyPageList;
