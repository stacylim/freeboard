<RegisterWholeWrqpper>
  <ProductRegister>상품 등록하기</ProductRegister>

  <ProductName>상품명</ProductName>
  <ProductNameInput
    name="productNameinput"
    type="text"
    placeholder="상품명을 작성해주세요."
    onChange={saveProductName}
  />
  <Summary>한줄요약</Summary>
  <SummaryInput
    name="summaryinput"
    type="text"
    placeholder="상품명을 작성해주세요."
    onChange={saveSummary}
  />
  <ProductDetail>상품설명</ProductDetail>
  <SummaryTool></SummaryTool>
  <ProductDetailInput
    name="productdetailinput"
    type="text"
    placeholder="상품설명을 작성해주세요."
    onChange={saveProductInfo}
  />

  <Price>판매 가격</Price>
  <PriceInput
    name="priceinput"
    type="text"
    placeholder="판매가격을 작성해주세요."
    onChange={savePrice}
  />

  <Tag>태그입력</Tag>
  <TagIput name="taginput" type="text" placeholder="#태그 #태그 #태그" />
  <MapWrapper>
    <LocationWrapper>
      <Location>거래위치</Location>
    </LocationWrapper>
    <RightWrapper>
      <GPS>GPS</GPS>
      <Latitude>위도</Latitude>
      <MapImg></MapImg>
      <Longtitude>경도</Longtitude>
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
    <PhotoInclu>사진 첨부</PhotoInclu>
    <PhotoOptions>메인 사진 설정</PhotoOptions>
    <radiobutton>사진1</radiobutton>
    <radiobutton>사진2</radiobutton>
  </MapWrapper>

  <RegisterButton>등록하기</RegisterButton>
</RegisterWholeWrqpper>;
