import React from "react";

import {
  Freeboard,
  MyPage,
  NavigationButtonWrapper,
  NavigationWrapper,
  UsedMarket,
} from "./Navigation.styles";

export default function NavigationUI({}) {
  return (
    <NavigationWrapper>
      <NavigationButtonWrapper>
        <Freeboard>자유게시판</Freeboard>
        <UsedMarket>중고마켓</UsedMarket>
        <MyPage>마이페이지</MyPage>
      </NavigationButtonWrapper>
    </NavigationWrapper>
  );
}
