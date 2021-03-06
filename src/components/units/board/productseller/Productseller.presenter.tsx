import { List } from "@material-ui/core";
import React from "react";
import ProductComment from "../productcomment/ProductComment.container";
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

export default function ProductSellerUI({
  data,
  onClickEdit,
  onClickList,
  isActive,
  // onClickLike,
}) {
  return (
    <EditWholeWrapper>
      <div> </div>
      <WholeContentWrapper>
        <ContenrCenterWrapper>
          <UpperWrapper>
            <ProfileWrapper>
              <ProfileImg src="/Profilephoto.png"></ProfileImg>
              <SellerDateWrapper>
                <Seller>{data?.fetchUseditem?.seller}</Seller>
                <Date>{data?.fetchUseditem?.createdAt}</Date>
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
                <ProductName>{data?.fetchUseditem?.name}</ProductName>
                <ProductDetail>{data?.fetchUseditem?.remarks}</ProductDetail>
              </LeftWrapper>

              <HeartWrapper>
                <Heart src="/Heart.png"></Heart>
                <HeartCount>{data?.fetchBoard?.likeCount}</HeartCount>
              </HeartWrapper>
            </UpperContent>

            <Price>{data?.fetchUseditem?.price}</Price>
            <CenterContent>
              <CarouselWrapper>
                <MainImg src="/galaxyAmain.png"></MainImg>
                {/* <Preview></Preview> */}
              </CarouselWrapper>
            </CenterContent>
            <ProductContent>{data?.fetchUseditem?.contents}</ProductContent>
            <ProductTag>{data?.fetchUseditem?.tags}</ProductTag>
          </ProductInfoWrapper>
          <Line src="/greyline.png"></Line>
          <MapWrapper>
            <MapImg src="/map.png"></MapImg>
          </MapWrapper>
          <Line src="/greyline.png"></Line>

          <BottomWrapper>
            <ListButton onClick={onClickList}>????????????</ListButton>
            <EditButton onClick={onClickEdit}>????????????</EditButton>
          </BottomWrapper>
          <Line src="/greyline.png"></Line>
        </ContenrCenterWrapper>
      </WholeContentWrapper>
      <div> </div>

      <ProductComment />
    </EditWholeWrapper>
  );
}
