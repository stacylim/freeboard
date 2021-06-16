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
} from "./Productregister.styles";

export default function ProductRegisterUI({
  isActive,
  onChangeInput,
  onClickRegister,
  defaultValues,
}) {
  return (
    <RegisterWholeWrapper>
      <div> </div>
      <WholeContentWrapper>
        <ProductRegister>상품 등록하기</ProductRegister>

        <ContenrCenterWrapper>
          <UpperContentWrapper>
            <ProductName>상품명</ProductName>
            <ProductNameInput
              name="productNameinput"
              type="text"
              placeholder="상품명을 작성해주세요."
              onChange={onChangeInput}
              defaultValue={defaultValues?.name}
            />
            <Summary>한줄요약</Summary>
            <SummaryInput
              name="summaryinput"
              type="text"
              placeholder="한줄요약을 작성해주세요."
              onChange={onChangeInput}
              defaultValue={defaultValues?.remarks}
            />
            <ProductDetail>상품설명</ProductDetail>
            <SummaryTool>Tools</SummaryTool>
            <ProductDetailInput
              name="productdetailinput"
              type="text"
              placeholder="상품설명을 작성해주세요."
              onChange={onChangeInput}
              defaultValue={defaultValues?.contents}
            />

            <Price>판매 가격</Price>
            <PriceInput
              name="priceinput"
              type="text"
              placeholder="판매가격을 작성해주세요."
              onChange={onChangeInput}
              defaultValue={defaultValues?.price}
            />

            <Tag>태그입력</Tag>
            <TagInput
              name="taginput"
              type="text"
              placeholder="#태그 #태그 #태그"
              onChange={onChangeInput}
              defaultValue={defaultValues?.tags}
            />
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
                    onChange={onChangeInput}
                  />
                  <MapIcon src="/mapicon.png"></MapIcon>
                  <Longtitude
                    name="longtitudeinput"
                    type="text"
                    placeholder="경도(LNG)"
                    onChange={onChangeInput}
                  />
                </RightUpperWrapper>

                <AddrWrapper>
                  <Addr>주소</Addr>
                  <AddrInput1
                    name="addrInput1"
                    type="text"
                    placeholder="주소를 입력해주세요"
                    onChange={onChangeInput}
                  />

                  <AddrInput2
                    name="addrInput2"
                    type="text"
                    placeholder="상세주소를 입력해주세요"
                    onChange={onChangeInput}
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
                    {/* <RadioOn type="radio" name="radio-button" /> */}
                    사진 1
                  </Button1>
                  <Button2>
                    {/* <RadioOff type="radio" name="radio-button" /> 사진 2 */}
                  </Button2>
                </Radiobutton>
              </ButtonWrapper>
            </PhotoWrapper>
          </BottomContentWrapper>
          <BottomWrapper>
            <RegisterButton onClick={onClickRegister}>등록하기</RegisterButton>
          </BottomWrapper>
        </ContenrCenterWrapper>
      </WholeContentWrapper>
      <div> </div>
    </RegisterWholeWrapper>
  );
}
