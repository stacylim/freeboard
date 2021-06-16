import React from "react";

import {
  EditWholeWrapper,
  ProductName,
  ProductDetail,
  Price,
  RightWrapper,
  BuyButton,
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
} from "./Productbuyer.styles";

export default function ProductBuyerUI({}) {
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
                <MainImg src="/galaxyAmain.png"></MainImg>
                {/* <Preview></Preview> */}
              </CarouselWrapper>
            </CenterContent>
            <ProductContent>
              액정에 잔기스랑 주변부 ㅁㅇ ㅁㄴㅇㄹ ㅁㅇㄴ ㅁㅇㄴㅁㄹㅇ ㅇㅁㄹ
            </ProductContent>
            <ProductTag>#삼성전자 #갤러시탭 #갓성비</ProductTag>
          </ProductInfoWrapper>
          <Line src="/greyline.png"></Line>
          <MapWrapper>
            <MapImg src="/map.png"></MapImg>
          </MapWrapper>
          <Line src="/greyline.png"></Line>

          <BottomWrapper>
            <ListButton>목록으로</ListButton>
            <BuyButton>구매하기</BuyButton>
          </BottomWrapper>
          <Line src="/greyline.png"></Line>
        </ContenrCenterWrapper>
      </WholeContentWrapper>
      <div> </div>
    </EditWholeWrapper>
  );
}
