import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
`;

export const Header = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
`;

// export const Footer = styled.div`
//   width: 100%;
//   height: 200px;
//   background-color: lightgray;
// `;

export const Body = styled.div`
  height: 500px;
`;

export const CarouselWrapper = styled.div`
  height: 400px;
  width: 100%;
  //라이브러리에서 클래스를 확인하고 .을 찍어주고 상위랩퍼에서 스타일 변경을 해주면된다.
  .carousel-viewport {
    height: 350px !important;
  }
  .carousel-left-arrow {
    left: 25%;
    top: 50%;
  }
  .carousel-right-arrow {
    right: 25%;
    top: 50%;
  }
  .carousel-dots {
    bottom: 10px;
  }
  /* height: 400px; */
`;

export const Carousel = styled.div`
  width: 100%;
  height: 100%;
`;

export const Navigation = styled.div`
  width: 100%;
  height: 100%;
`;
