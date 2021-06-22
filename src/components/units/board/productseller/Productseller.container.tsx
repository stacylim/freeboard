import ProductSellerUI from "./Productseller.presenter";
import { useQuery, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_USEDITEM } from "./Productseller.queries";

export default function ProductSeller() {
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();
  console.log(router);

  const onClickEdit = () => {
    router.push(`/Boards/product/seller/${router.query.id}/edit`);
  };

  const onClickList = () => {
    router.push(`/Boards/product/list`);
  };
  //리패치를 실행을 하면 useQuery가 다시 실행, 리페치를 걸어주는 부분이

  const { data, refetch } = useQuery(FETCH_USEDITEM, {
    variables: { useditemId: String(router.query.id) },
  });

  // const onClickLike = async () => {
  //   console.log(router.query.id);
  //   try {
  //     await fetchUseditemsIPicked({
  //       //roter.query.id 실제로 변하는 아이디를 가져오는 방법
  //       variables: { boardId: router.query.id },
  //     });
  //     refetch();
  //     // alert("게시물이 성공적으로 등록되었습니다.");
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };
  console.log(data);
  return (
    <>
      <ProductSellerUI
        data={data}
        isActive={isActive}
        onClickList={onClickList}
        onClickEdit={onClickEdit}
        // onClickLike={onClickLike}
      />
    </>
  );
}
// function fetchUseditemsIPicked(arg0: {
//   //roter.query.id 실제로 변하는 아이디를 가져오는 방법
//   variables: { boardId: string | string[] };
// }) {
//   throw new Error("Function not implemented.");
// }
