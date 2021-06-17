import ProductListUI from "./productList.presenter";
import { useQuery, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_USED_ITEMS_OF_THE_BEST } from "./productList.queries";
import { useState } from "react";

const ProductList = () => {
  const client = useApolloClient();
  const [search, setSearch] = useState("");

  const { data, loading, refetch, fetchMore } = useQuery(
    FETCH_USED_ITEMS_OF_THE_BEST,
    {
      variables: { search: search },
    }
  );

  const onClickSearchBox = () => {
    refetch({ search: search });
  };

  return (
    <ProductListUI
      data={data}
      // saveSearch={saveSearch}
      onClickSearchBox={onClickSearchBox}
    />
  );
};

export default ProductList;
