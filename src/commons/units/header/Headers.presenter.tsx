import React from "react";
import Carousel from "react-img-carousel";

import {
  ListImageWrapper,
  LogoWholeWrapper,
} from "../../../components/units/board/list/Board.List.styles";
import {
  Carouselmg,
  CarouselWrapper,
  Freeboard,
  HeadWrapper,
  JoinMember,
  Login,
  LoginJoinWrapper,
  LogoHeaderWrapper,
  MyPage,
  NavigationButtonWrapper,
  NavigationWrapper,
  UsedMarket,
} from "./Headers.styles";

// import {} from "./Header.styles";

export default function HeaderUI(
  {
    // data,
    // boardCount,
    // saveSearch,
    // onClickSearchBox,
    // onClickPage1,
  }
) {
  return (
    <div>
      <LogoHeaderWrapper>
        <LogoWholeWrapper src="/codecamplogo.png"></LogoWholeWrapper>

        <LoginJoinWrapper>
          <Login>로그인</Login>
          <JoinMember>회원가입</JoinMember>
        </LoginJoinWrapper>
      </LogoHeaderWrapper>

      <ListImageWrapper>
        <HeadWrapper>
          <CarouselWrapper>
            <Carousel
              // cellPadding={5}
              viewportWidth="100%"
              cellPadding={5}
              dots={true}
            >
              <Carouselmg src="/carouselbox1.png" />
              <Carouselmg src="/carouselbox2.png" />
              <Carouselmg src="/carouselbox3.png" />
            </Carousel>
          </CarouselWrapper>
        </HeadWrapper>
      </ListImageWrapper>

      <NavigationWrapper>
        <NavigationButtonWrapper>
          <Freeboard>자유게시판</Freeboard>
          <UsedMarket>중고마켓</UsedMarket>
          <MyPage>마이페이지</MyPage>
        </NavigationButtonWrapper>
      </NavigationWrapper>
    </div>
  );
}
