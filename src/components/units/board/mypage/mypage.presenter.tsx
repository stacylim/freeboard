import { render } from "react-dom";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import {} from "./mypage.styles";
export default function ProductListUI({
  data,
  useddata,
  onClickSearchBox,
  saveSearch,
  loadMore,
  hasMore,
  onClickRegister,
}) {
  return (
    <>
      <MyPage></MyPage>
    </>
  );
}
