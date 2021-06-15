import React from "react";

import {
  EditWholeWrapper,
  ProductName,
  ProductDetail,
  Price,
  RightWrapper,
  EditButton,
  BottomWrapper,
  WholeContentWrapper,
  ContenrCenterWrapper,
  ProfileWrapper,
  ProductInfoWrapper,
  LeftWrapper,
  Heart,
  HeartCount,
  CarouselWrapper,
  MainImg,
  Preview,
  ProductContent,
  ProductTag,
  MapWrapper,
  ListButton,
  ProfileImg,
  Seller,
  Date,
  Img1,
  Img2,
  MapImg,
  SellerDateWrapper,
  UpperWrapper,
  Line,
  UpperContent,
  HeartWrapper,
  CenterContent,
} from "./Productseller.styles";

export default function ProductSellerUI({}) {
  return (
    <EditWholeWrapper>
      <div> </div>
      <WholeContentWrapper>
        <ContenrCenterWrapper>
          <UpperWrapper>
            <ProfileWrapper>
              <ProfileImg src="/Profilephoto.png"></ProfileImg>
              <SellerDateWrapper>
                <Seller>판매자</Seller>
                <Date>Date.2021</Date>
              </SellerDateWrapper>
            </ProfileWrapper>

            <RightWrapper>
              <Img1 src="/Link.png"></Img1>
              <Img2 src="/mapicon.png"></Img2>
            </RightWrapper>
          </UpperWrapper>
          <Line src="/greyline.png"></Line>

          <ProductInfoWrapper>
            <UpperContent>
              <LeftWrapper>
                <ProductName>2019 LTE 32GB</ProductName>
                <ProductDetail>삼성전자 갤럭시탭A 10.1</ProductDetail>
              </LeftWrapper>

              <HeartWrapper>
                <Heart src="/Heart.png"></Heart>
                <HeartCount>20</HeartCount>
              </HeartWrapper>
            </UpperContent>

            <Price>240,120원</Price>
            <CenterContent>
              <CarouselWrapper>
                <MainImg></MainImg>
                <Preview></Preview>
              </CarouselWrapper>
            </CenterContent>
            <ProductContent></ProductContent>
            <ProductTag></ProductTag>
          </ProductInfoWrapper>
          <MapWrapper>
            <MapImg></MapImg>
          </MapWrapper>

          <BottomWrapper>
            <ListButton>목록으로</ListButton>
            <EditButton>수정하기</EditButton>
          </BottomWrapper>
        </ContenrCenterWrapper>
      </WholeContentWrapper>
      <div> </div>
    </EditWholeWrapper>
  );
}
