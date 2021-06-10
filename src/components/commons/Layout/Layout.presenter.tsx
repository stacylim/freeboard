import {
  Body,
  Navigation,
  Header,
  Wrapper,
  CarouselWrapper,
} from "./Layout.styles";
import React from "react";
import Carousel from "react-img-carousel";

const LayoutUI = ({ children }) => {
  return (
    <Wrapper>
      <Header></Header>
      <CarouselWrapper></CarouselWrapper>
      <Navigation></Navigation>
      {/* <Body>{children}</Body> */}
      {/* <Footer>푸터영역</Footer> */}
    </Wrapper>
  );
};

export default LayoutUI;
