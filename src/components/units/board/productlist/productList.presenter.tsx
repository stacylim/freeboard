import { render } from "react-dom";
import Carousel from "react-img-carousel";
import React from "react";
import {
  MainWrapper,
  MainTitle,
  UpperBoxWrapper,
  MiddleWrapper,
  Selling,
  Soldout,
  ProductSearchWrapper,
  Calendar,
  SearchButton,
  BoardWrapper,
  BottomWrapper,
  ProductRegister,
} from "./productList.styles";

export default function ProductListUI({}) {
  return (
    <MainWrapper>
      <MainTitle>베스트 상품</MainTitle>
      <UpperBoxWrapper></UpperBoxWrapper>

      <MiddleWrapper>
        <Selling>판매중상품</Selling>
        <Soldout>판매된상품</Soldout>
        <ProductSearchWrapper></ProductSearchWrapper>
        <Calendar></Calendar>
        <SearchButton></SearchButton>
      </MiddleWrapper>
      <BoardWrapper></BoardWrapper>

      <BottomWrapper>
        <ProductRegister>상품 등록하기</ProductRegister>
      </BottomWrapper>
    </MainWrapper>
  );
}
