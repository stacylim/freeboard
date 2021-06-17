import { render } from "react-dom";
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
  UsedBoardList,
} from "./productList.styles";

export default function ProductListUI({ data, onClickSearchBox }) {
  return (
    <MainWrapper>
      <MainTitle>베스트 상품</MainTitle>
      <UpperBoxWrapper></UpperBoxWrapper>

      <MiddleWrapper>
        <Selling>판매중상품</Selling>
        <Soldout>판매된상품</Soldout>
        <ProductSearchWrapper></ProductSearchWrapper>
        <Calendar></Calendar>
        <SearchButton onClick={onClickSearchBox}>검색하기</SearchButton>
      </MiddleWrapper>
      <BoardWrapper>
        {data.map((el, key) => {
          return (
            <UsedBoardList key={key} style={{ color: "#ababab" }}>
              <div> {key + 1} </div>
              <div> {el.name} </div>
              <div> {el.remarks} </div>
              <div> {el.contents} </div>
              <div>{el.price}</div>
              <div>{el.tags}</div>

              {/* <div> {el.createdAt.slice(0, 10)} </div> */}
            </UsedBoardList>
          );
        })}
      </BoardWrapper>

      <BottomWrapper>
        <ProductRegister>상품 등록하기</ProductRegister>
      </BottomWrapper>
    </MainWrapper>
  );
}
