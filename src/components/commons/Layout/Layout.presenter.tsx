import { Body, Footer, Header, Wrapper } from "./Layout.styles";
import React from "react";
import Carousel from "react-img-carousel";

import {
  ListImageWrapper,
  LogoWholeWrapper,
} from "../../units/board/list/Board.List.styles";
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
} from "./Layout.styles";

const LayoutUI = ({ children }) => {
  return (
    <Wrapper>
      {/* <Carousel></Carousel> */}
      <Header>
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
      </Header>
      <Body>{children}</Body>
      {/* <Footer>푸터영역</Footer> */}
    </Wrapper>
  );
};

export default LayoutUI;
