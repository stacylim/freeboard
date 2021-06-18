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
  InfoBox,
  UpperLine,
  ListName,
  ListRemarks,
  ListTags,
  ListProfile,
  ListSeller,
  ListHeart,
  ListCount,
  ListProductPrice,
  ListWrapper,
  MiddleOutter,
  BottomLine,
} from "./productList.styles";

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
    <MainWrapper>
      <MainTitle>베스트 상품</MainTitle>
      <UpperBoxWrapper>
        {data?.fetchUseditemsOfTheBest?.map((data, key) => {
          return (
            <BestBox key={key} style={{ color: "#ababab" }}>
              <Img src="/galaxyAmain.png"></Img>
              <Name>{data.name}</Name>
              <BoxBottomWrapper>
                <InfoBox>
                  <Remarks>{data.remarks}</Remarks>
                  <Price>{data.price}</Price>
                </InfoBox>
                <HeartWrapper>
                  <Heart src="/Heart.png"></Heart>
                  <Count>20</Count>
                </HeartWrapper>
              </BoxBottomWrapper>
            </BestBox>
          );
        })}
      </UpperBoxWrapper>
      <MiddleOutter>
        <MiddleWrapper>
          <ListWrapper>
            <Selling>판매중상품</Selling>
            <Soldout>판매된상품</Soldout>
          </ListWrapper>
          <ProductSearchWrapper>
            <SearchWrapper>
              <SearchInputImgWrapper>
                <SearchInputWrapper>
                  <SearchImg src="/searchimg.png"></SearchImg>

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

          <Calendar>YYYY/MM/DD ~ YYYY/MM/DD</Calendar>
          <SearchButton onClick={onClickSearchBox}>검색</SearchButton>
        </MiddleWrapper>
      </MiddleOutter>
      <UpperLine src="/greyline.png"></UpperLine>

      <InfiniteScroll loadMore={loadMore} hasMore={true}>
        {useddata?.fetchUseditems?.map((data, key) => {
          return (
            <BoardWrapper>
              <UsedBoxList key={key}>
                <ListImg src="/galaxyAmain.png"></ListImg>
                <ProductInfo>
                  <ListName>{data.name}</ListName>
                  <ListRemarks>{data.remarks}</ListRemarks>
                  <ListTags>{data.tags}</ListTags>
                  <ProfileWrap>
                    <ListProfile src="/profilelist.png"></ListProfile>
                    <ListSeller>판매자</ListSeller>
                    <ListHeart src="/Heart.png"></ListHeart>
                    <ListCount>20</ListCount>
                  </ProfileWrap>
                </ProductInfo>
                <ListProductPrice>{data.price}원</ListProductPrice>
              </UsedBoxList>
              <BottomLine></BottomLine>
            </BoardWrapper>
          );
        })}
      </InfiniteScroll>

      <BottomWrapper>
        <ProductRegister onClick={onClickRegister}>
          상품 등록하기
        </ProductRegister>
      </BottomWrapper>
    </MainWrapper>
  );
}
