import Navigation from "../Layout/navigation/Navigation.container";
import styled from "@emotion/styled";
import Header from "./header/Headers.container";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  z-index: 99;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  height: 100%;
`;

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Navigation />
      <Body>{children}</Body>
    </Wrapper>
  );
};
