import React from "react";
import {
  ProductRegister,
  RegisterWholeWrapper,
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
  RegisterButton,
  UpperContentWrapper,
  BottomContentWrapper,
  MapandLocationWrapper,
  MapIcon,
  RightUpperWrapper,
  PhotoWrapper,
} from "./Productregister.styles";

export default function ProductRegisterUI(
  {
    // saveProductName,
    // SaveSummary,
    // SaveProductInfo,
    // SavePrice,
  }
) {
  return (
    <RegisterWholeWrapper>
      <ProductRegister>상품 등록하기</ProductRegister>
      <UpperContentWrapper>
        <ProductName>상품명</ProductName>
        <ProductNameInput
          name="productNameinput"
          type="text"
          placeholder="상품명을 작성해주세요."
          // onChange={saveProductName}
        />
        <Summary>한줄요약</Summary>
        <SummaryInput
          name="summaryinput"
          type="text"
          placeholder="상품명을 작성해주세요."
          // onChange={saveSummary}
        />
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
        <TagInput name="taginput" type="text" placeholder="#태그 #태그 #태그" />
      </UpperContentWrapper>
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
          </RightWrapper>
        </MapandLocationWrapper>
        <PhotoWrapper>
          <PhotoInclu>사진 첨부</PhotoInclu>
          <PhotoOptions>메인 사진 설정</PhotoOptions>
          <Radiobutton>사진1</Radiobutton>
          <Radiobutton>사진2</Radiobutton>
        </PhotoWrapper>
      </BottomContentWrapper>

      <RegisterButton>등록하기</RegisterButton>
    </RegisterWholeWrapper>
  );
}
