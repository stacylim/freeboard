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

export default function ProductListUI({ data, onClickSearchBox, saveSearch }) {
  <MainWrapper>
    <MainTitle>베스트 상품</MainTitle>
    <UpperBoxWrapper>
      <BestBox></BestBox>
      <BestBox></BestBox>
      <BestBox></BestBox>
      <BestBox></BestBox>
    </UpperBoxWrapper>
    {data.map((el, key) => {
      return (
        <UpperBoxWrapper key={key}>
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
        </UpperBoxWrapper>
      );
    })}

    {/* {data?.fetchUseditemsOfTheBest?.map((data, key) => {
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
      )
}
      </UpperBoxWrapper> */}

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
            <Profile src="/profile.png"></Profile>
            <Seller></Seller>
            <Heart src="/Heart.png"></Heart>
            <Count></Count>
          </ProfileWrap>
        </ProductInfo>
        <ProductPrice></ProductPrice>
      </UsedBoxList>
      {data.map((el, key) => {
        return (
          <UsedBoardList key={key} style={{ color: "#ababab" }}>
            <ListImg></ListImg>
            <ProductInfo>
              <div> {el.name} </div>
              <div> {el.remarks} </div>
              <div> {el.contents} </div>
              <div>{el.tags}</div>
              <div>{el.seller}</div>
              <div>{el.heart}</div>
            </ProductInfo>
            <ProductPrice>{el.price}</ProductPrice>

            {/* <div> {el.createdAt.slice(0, 10)} </div> */}
          </UsedBoardList>
        );
      })}
    </BoardWrapper>

    <BottomWrapper>
      <ProductRegister>상품 등록하기</ProductRegister>
    </BottomWrapper>
  </MainWrapper>;
}
