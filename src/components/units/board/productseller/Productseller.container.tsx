import ProductSellerUI from "./Productseller.presenter";
import { useQuery, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USEDITEM } from "./Productseller.queries";
import ProductComment from "../productcomment/ProductComment.container";

export default function ProductSeller() {
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  const onClickEdit = () => {
    router.push(`/Boards/product/seller/${router.query._id}/edit`);
  };

  const onClickList = () => {
    router.push(`/Boards/product/list`);
  };
  //리패치를 실행을 하면 useQuery가 다시 실행, 리페치를 걸어주는 부분이

  const { data, refetch } = useQuery(FETCH_USEDITEM, {
    variables: { USEDitemid: String(router.query.id) },
  });

  return (
    <ProductSellerUI
      isActive={isActive}
      onClickList={onClickList}
      onClickEdit={onClickEdit}
    />
  );
}
