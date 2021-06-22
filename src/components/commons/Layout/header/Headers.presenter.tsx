import React from "react";
import Carousel from "react-img-carousel";

import {
  ListImageWrapper,
  LogoWholeWrapper,
} from "../../../units/board/list/Board.List.styles";
import {
  Carouselmg,
  CarouselWrapper,
  Freeboard,
  HeadWrapper,
  JoinMember,
  Login,
  LoginJoinWrapper,
  LogoHeaderWrapper,
} from "./Headers.styles";

// import {} from "./Header.styles";

export default function HeaderUI({
  router,
  // data,
  // boardCount,
  // saveSearch,
  // onClickSearchBox,
  // onClickPage1,
}) {
  return (
    <div>
      <LogoHeaderWrapper>
        <LogoWholeWrapper src="/codecamplogo.png"></LogoWholeWrapper>

        <LoginJoinWrapper>
          <Login onClick={() => router.push("/login")}>로그인</Login>
          <JoinMember>회원가입</JoinMember>
        </LoginJoinWrapper>
      </LogoHeaderWrapper>

      {/* <ListImageWrapper>
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
      </ListImageWrapper> */}
    </div>
  );
}
