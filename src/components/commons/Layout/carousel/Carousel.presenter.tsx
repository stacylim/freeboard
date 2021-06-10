import React from "react";
import Carousel from "react-img-carousel";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ListImageWrapper } from "../../../units/board/list/Board.List.styles";
import styled from "@emotion/styled";
import { Carouselmg, CarouselWrapper, HeadWrapper } from "./Carousel.styles";
const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: -40px;
  }

  .slick-next {
    right: 120px;
  }

  .slick-prev {
    left: 120px;
    z-index: 1000;
    /* background-color: white; */
  }
  .slick-arrow {
    color: white;
  }
`;
export default function CarouselUI({}) {
  return (
    // <ListImageWrapper>
    // <HeadWrapper>
    <CarouselWrapper>
      <StyledSlider
        // cellPadding={5}
        // viewportWidth="100%"
        cellPadding={5}
        dots={true}
      >
        <Carouselmg src="/carouselbox1.png" />
        <Carouselmg src="/carouselbox2.png" />
        <Carouselmg src="/carouselbox3.png" />
      </StyledSlider>
    </CarouselWrapper>
    // </HeadWrapper>
    // </ListImageWrapper>
  );
}
