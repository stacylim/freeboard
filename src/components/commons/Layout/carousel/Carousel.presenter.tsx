import React from "react";
import Carousel from "react-img-carousel";

import { ListImageWrapper } from "../../../units/board/list/Board.List.styles";

import { Carouselmg, CarouselWrapper, HeadWrapper } from "./Carousel.styles";

export default function CarouselUI({}) {
  return (
    <div>
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
    </div>
  );
}
