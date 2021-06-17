import { render } from "react-dom";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";
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
  BestBox,
  BoxBottomWrapper,
  Heart,
  HeartWrapper,
  Img,
  Name,
  Price,
  Remarks,
  Count,
  UsedBoxList,
  ListImg,
  ProductInfo,
  ProductPrice,
  Tags,
  ProfileWrap,
  Profile,
  Seller,
  SearchImg,
  SearchInputImgWrapper,
  SearchWrapper,
  SearchInput,
  SearchInputWrapper,
} from "./productList.styles";

export default function ProductListUI({
  data,
  onClickSearchBox,
  saveSearch,
  loadMore,
  hasMore,
}) {
  return (
    <MainWrapper>
      <MainTitle>베스트 상품</MainTitle>
      <UpperBoxWrapper>
        {data?.fetchUseditemsOfTheBest?.map((data, key) => {
          return (
            <BestBox key={key} style={{ color: "#ababab" }}>
              <Img src="/galaxyAmain.png"></Img>
              <Name>{data.name}</Name>
              <BoxBottomWrapper>
                <Remarks>{data.remarks}</Remarks>
                <Price>{data.price}</Price>
                <HeartWrapper>
                  <Heart src="/Heart.png"></Heart>
                  <Count>20</Count>
                </HeartWrapper>
              </BoxBottomWrapper>
            </BestBox>
          );
        })}
      </UpperBoxWrapper>

      <MiddleWrapper>
        <Selling>판매중상품</Selling>
        <Soldout>판매된상품</Soldout>
        <ProductSearchWrapper>
          <SearchWrapper>
            <SearchInputImgWrapper>
              <SearchImg src="/searchimg.png"></SearchImg>
              <SearchInputWrapper>
                <SearchInput
                  name="search"
                  type="text"
                  placeholder="제품을 검색해주세요."
                  onChange={saveSearch}
                />
                {/* 인풋에있는 글자가 변경됐을때 세이브서치라는 함수를 실행 */}
              </SearchInputWrapper>
            </SearchInputImgWrapper>
          </SearchWrapper>
        </ProductSearchWrapper>

        <Calendar></Calendar>
        <SearchButton onClick={onClickSearchBox}>검색</SearchButton>
      </MiddleWrapper>

      <BoardWrapper>
        <UsedBoxList>
          <ListImg></ListImg>
          <ProductInfo>
            <Name></Name>
            <Remarks></Remarks>
            <Tags></Tags>
            <ProfileWrap>
              <Profile src="/Profilephoto.png"></Profile>
              <Seller></Seller>
              <Heart src="/Heart.png"></Heart>
              <Count></Count>
            </ProfileWrap>
          </ProductInfo>
          <ProductPrice></ProductPrice>
        </UsedBoxList>

        <InfiniteScroll loadMore={loadMore} hasMore={true}>
          {/* 여기에 맵으로 넣기  */}
        </InfiniteScroll>
      </BoardWrapper>

      <BottomWrapper>
        <ProductRegister>상품 등록하기</ProductRegister>
      </BottomWrapper>
    </MainWrapper>
  );
}
