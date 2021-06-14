import React from "react";
import {
  ProductEdit,
  EditWholeWrapper,
  ProductName,
  ProductNameInput,
  Summary,
  SummaryInput,
  ProductDetail,
  SummaryTool,
  ProductDetailInput,
  Price,
  PriceInput,
  Tag,
  TagInput,
  Mapimg,
  LocationWrapper,
  Location,
  RightWrapper,
  GPS,
  Latittude,
  Longtitude,
  Addr,
  AddrInput1,
  AddrInput2,
  PhotoInclu,
  PhotoOptions,
  Radiobutton,
  CancelButton,
  EditButton,
  UpperContentWrapper,
  BottomContentWrapper,
  MapandLocationWrapper,
  MapIcon,
  RightUpperWrapper,
  PhotoWrapper,
  UploadWrapper,
  Upload1,
  Upload2,
  ButtonWrapper,
  UploadButton,
  Box1Img,
  RadioOn,
  RadioOff,
  Button1,
  Button2,
  BottomWrapper,
  WholeContentWrapper,
  ContenrCenterWrapper,
  AddrWrapper,
} from "./Productseller.styles";

export default function ProductSellerUI({}) {
  return (
    <EditWholeWrapper>
      <div> </div>
      <WholeContentWrapper>
        <ProfileWrapper>
          <ProfileImg src="/profile.png"></ProfileImg>
          <Seller>{data?.fetchBoard?.writer}</Seller>
          <Date> {data?.fetchBoard?.date} </Date>
        </ProfileWrapper>
        <RightWrapper>
          <Img1></Img1>
          <Img2></Img2>
        </RightWrapper>

        <ContenrCenterWrapper>
          <ProductInfoWrapper>
            <LeftWrapper>
              <ProductName>2019 LTE 32GB</ProductName>
              <ProductDetail>삼성전자 갤럭시탭A 10.1</ProductDetail>
            </LeftWrapper>
            <RightWrapper>
              <Heart></Heart>
              <HeartCouont>20</HeartCouont>
            </RightWrapper>
            <Price>240,120원</Price>

            <ProductDetail>상품설명</ProductDetail>
            <SummaryTool>Tools</SummaryTool>
            <ProductDetailInput
              name="productdetailinput"
              type="text"
              placeholder="상품설명을 작성해주세요."
              // onChange={saveProductInfo}
            />

            <Price>판매 가격</Price>
            <PriceInput
              name="priceinput"
              type="text"
              placeholder="판매가격을 작성해주세요."
              // onChange={savePrice}
            />

            <Tag>태그입력</Tag>
            <TagInput
              name="taginput"
              type="text"
              placeholder="#태그 #태그 #태그"
            />
          </ProductInfoWrapper>
          <BottomContentWrapper>
            <MapandLocationWrapper>
              <LocationWrapper>
                <Location>거래위치</Location>
                <Mapimg src="/mapimage.png"></Mapimg>
              </LocationWrapper>
              <RightWrapper>
                <GPS>GPS</GPS>
                <RightUpperWrapper>
                  <Latittude
                    name="latitutdeinput"
                    type="text"
                    placeholder="위도(LAT)"
                  />
                  <MapIcon src="/mapicon.png"></MapIcon>
                  <Longtitude
                    name="longtitudeinput"
                    type="text"
                    placeholder="경도(LNG)"
                  />
                </RightUpperWrapper>

                <AddrWrapper>
                  <Addr>주소</Addr>
                  <AddrInput1
                    name="addrInput1"
                    type="text"
                    placeholder="주소를 입력해주세요"
                  />

                  <AddrInput2
                    name="addrInput2"
                    type="text"
                    placeholder="상세주소를 입력해주세요"
                  />
                </AddrWrapper>
              </RightWrapper>
            </MapandLocationWrapper>
            <PhotoWrapper>
              <PhotoInclu>사진 첨부</PhotoInclu>
              <UploadWrapper>
                <Upload1>
                  <Box1Img src="/galaxytabA.png" />
                </Upload1>
                <Upload2>
                  <UploadButton>+</UploadButton>
                  Upload
                </Upload2>
              </UploadWrapper>

              <PhotoOptions>메인 사진 설정</PhotoOptions>
              <ButtonWrapper>
                <Radiobutton>
                  <Button1>
                    <RadioOn src="/radio_on.png" />
                    사진 1
                  </Button1>
                  <Button2>
                    <RadioOff src="/radio_off.png" /> 사진 2
                  </Button2>
                </Radiobutton>
              </ButtonWrapper>
            </PhotoWrapper>
          </BottomContentWrapper>
          <BottomWrapper>
            <CancelButton>취소하기</CancelButton>
            <EditButton>등록하기</EditButton>
          </BottomWrapper>
        </ContenrCenterWrapper>
      </WholeContentWrapper>
      <div> </div>
    </EditWholeWrapper>
  );
}
