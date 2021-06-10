import Navigation from "../Layout/navigation/Navigation.container";
import styled from "@emotion/styled";
import Header from "./header/Headers.container";
import Carousel from "./carousel/Carousel.container";

export const Wrapper = styled.div`
  width: 100%;
  /* display: flex; */
  z-index: 99;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  height: 100%;
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Carousel />
      <Navigation />
      {/* <Body>{children}</Body> */}
    </Wrapper>
  );
};

export default Layout;
