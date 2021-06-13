import { render } from "react-dom";
import Carousel from "react-img-carousel";
import React from "react";
import {} from "./usedmarket.main.styles";

export default function UsedmarketMainUI({}) {
  return (
    <MainWrapper>
      <MainTitle>베스트 상품</MainTitle>
      <UpperBoxWrapper></UpperBoxWrapper>

      <MiddleWrqpper>
        <ProductSearch></ProductSearch>
        <Calendar></Calendar>
        <SearchButton></SearchButton>
      </MiddleWrqpper>

      <BoardWrqpper></BoardWrqpper>

      <BottomWrapper>
        <ProductRegister>상품 등록하기</ProductRegister>
      </BottomWrapper>
    </MainWrapper>
  );
}
