import { render } from "react-dom";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { BoardWrapper, ProfileImg ,MyPage, MyPageCredit, MyPageMarket, MyPageName, MyPagePoint, MyPageProfile, MyPageWrapper, ProfileWrapper } from "./mypage.styles";


export default function MyPageListUI({
  data,
  useddata,
  onClickSearchBox,
  saveSearch,
  loadMore,
  hasMore,
  onClickRegister,
}) {
  return (
    <MyPageWrapper>
        <ProfileWrapper>
      <MyPage src='/Profilephoto.png'>MYPAGE</MyPage>
      <ProfileImg></ProfileImg>
      
      <MyPageName>{data?.name}</MyPageName>
      <MyPageCredit>100,000</MyPageCredit>
      
      <MyPageMarket>내 장터</MyPageMarket>
      
      <MyPagePoint>내 포인트</MyPagePoint>
     
      <MyPageProfile>내 프로필</MyPageProfile>
      </ProfileWrapper>
      
      <BoardWrapper>
          <RightWrapper>
          <MyProduct>나의상품</MyProduct>
          <MyMap>마이 맵</MyMap>
          </RightWrapper>
      <MainBoderListDiv>
          <MainBoardList style={{ fontWeight: "bold" }}>
            <div> 번호 </div>
            <div> 제목 </div>
            <div>판매가격</div>
            <div> 작성자 </div>
            <div> 날짜 </div>
          </MainBoardList>

          <MainBoardListDivs>
            {data.map((el, key) => {
              return (
                <MainBoardList key={key} style={{ color: "#ababab" }}>
                  <div> {key + 1} </div>
                  <div> {el.title} </div>
                  <div> {el.writer} </div>
                  <div> {el.createdAt.slice(0, 10)} </div>
                </MainBoardList>
              );
            })}
          </MainBoardListDivs>
      </BoardWrapper>
    </MyPageWrapper>>
  );
}
