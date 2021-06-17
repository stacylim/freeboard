import ProductListUI from "./productList.presenter";
import { useQuery, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_USED_ITEMS_OF_THE_BEST,
  FETCH_USED_ITEMS,
} from "./productList.queries";
import { useState } from "react";

const ProductList = () => {
  const client = useApolloClient();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { data, loading, refetch } = useQuery(FETCH_USED_ITEMS_OF_THE_BEST);
  //위의 데이터와  이름이 충돌나서 :을 넣고 이름을 변경해준 것
  const { data: useddata, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: { search: search, page: page },
  });

  console.log(useddata);
  const onClickSearchBox = () => {
    refetch({ search: search });
  };

  const saveSearch = (event) => {
    setSearch(event.target.value);
  };

  const loadMore = () => {
    console.log(data?.length);
    if (data?.fetchUseditems?.length % 10 !== 0) {
      return;
    }
    fetchMore({
      //page값을 여기서 추가해줬는데, 위의 fetchMore useQuery에서는 페이지값이 없어서서 오류가 낫었다.
      //useQuery variables 안에 페이지값을 추가+ 페이지 스테이트값을 추가함에 따라 오류 해결
      variables: { page: Math.floor(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => ({
        // fetchMore로 데이터를 받아온 후 작업을 해주세요. <div className=""></div>
        fetchUseditems: [
          ...prev.fetchUseditems,
          ...fetchMoreResult.fetchUseditems,
        ],
        //배열을 연결하기위해 스프레드 ....
      }),
    });
  };

  return (
    <ProductListUI
      data={data}
      saveSearch={saveSearch}
      onClickSearchBox={onClickSearchBox}
      loadMore={loadMore}
      hasMore={true}
      // onClickSale={onClickSale}
      // onClickSoldout={onClickSoldout}
    />
  );
};

export default ProductList;
