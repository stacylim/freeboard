import { render } from "react-dom";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  BoardWrapper,
  ProfileImg,
  MyPage,
  MyPageCredit,
  MyPageMarket,
  MyPageName,
  MyPagePoint,
  MyPageProfile,
  MyPageWrapper,
  ProfileWrapper,
  RightWrapper,
  MainBoardList,
  MainBoardListDivs,
  MainBoderListDiv,
  MyMap,
  MyProduct,
  Credit,
  Market,
  Point,
  Profile,
  Wrapper1,
  Wrapper2,
  Wrapper3,
  Wrapper4,
  ColumnLine,
  TopLine,
  One,
  Wrap,
  Title,
  Price,
} from "./mypage.styles";

export default function MyPageProfileUI({ data, dataISold }) {
  return (
    <MyPageWrapper>
      <ProfileWrapper>
        <Wrap>
          <MyPage>MY PAGE</MyPage>
          <ProfileImg src="/Profilephoto.png"></ProfileImg>
          <MyPageName>{data?.name}</MyPageName>
          <Wrapper1>
            <MyPageCredit src="/point.png"></MyPageCredit>
            <Credit>100,000</Credit>
          </Wrapper1>
          <Wrapper2>
            <MyPageMarket src="/cart.png"></MyPageMarket>
            <Market>내 장터</Market>
          </Wrapper2>
          <Wrapper3>
            <MyPagePoint src="/graypoint.png"></MyPagePoint>
            <Point>내 포인트</Point>
          </Wrapper3>
          <Wrapper4>
            <MyPageProfile src="/Profilephoto.png"></MyPageProfile>
            <Profile>내 프로필</Profile>
          </Wrapper4>
        </Wrap>
        <div></div>
      </ProfileWrapper>
      <ColumnLine></ColumnLine>
      <BoardWrapper>
        <RightWrapper>
          <One></One>
          <MyProduct>나의상품</MyProduct>
          <MyMap>마이 맵</MyMap>
        </RightWrapper>
        <TopLine></TopLine>
        <MainBoderListDiv>
          <MainBoardList style={{ fontWeight: "bold" }}>
            <div> 번호 </div>
            <div> 제목 </div>
            <div> 판매가격 </div>
            <div> 작성자 </div>
            <div> 날짜 </div>
          </MainBoardList>
          {/* <MainBoardList>
            <Number> 10 </Number>
            <Title>게시물 제목입니다.</Title>
            <Price> $2000 </Price>
            <Date> 날짜 </Date>
          </MainBoardList> */}

          <MainBoardListDivs>
            {new Array(10).fill(1).map((el, key) => {
              console.log(el);
              return (
                <MainBoardList
                  key={key}
                  style={
                    key === 9
                      ? { borderBottom: "solid 1px #ababab" }
                      : undefined
                  }
                >
                  <div> 1 </div>
                  <div> 2 </div>
                  <div> 3</div>
                  <div> 4 </div>
                </MainBoardList>
              );
            })}

            {/* {dataISold?.map((el, key) => {
              return (
                <MainBoardList key={key} style={{ color: "#ababab" }}>
                  <div> {key + 1} </div>
                  <div> {el.title} </div>
                  <div> {el.price} </div>
                  <div> {el.createdAt.slice(0, 10)} </div>
                </MainBoardList>
              );
            })} */}
          </MainBoardListDivs>
        </MainBoderListDiv>
      </BoardWrapper>
    </MyPageWrapper>
  );
}
