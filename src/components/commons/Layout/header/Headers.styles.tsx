import styled from "@emotion/styled";

export const LogoHeaderWrapper = styled.div`
  width: 100%;
  height: 110px;
  /* display: flex; */
  flex-direction: row;
  align-content: space-between;
  display: grid;
  grid-template-columns: 70% auto;
  background-color: white;
  padding-top: 30px;
`;

export const LoginJoinWrapper = styled.div`
  /* width: 200px; */
  /* margin-left: 650px; */
  text-align: right;
  margin-right: 20px;
`;

export const Login = styled.button`
  width: 92px;
  height: 44px;
  border: none;
`;

export const JoinMember = styled.button`
  width: 92px;
  height: 44px;
  background-color: #ffd600;
  border: none;
`;

export const HeadWrapper = styled.div`
  /* display: flex; */
  align-items: center;
`;

export const Carousel = styled.div``;

export const Carouselmg = styled.img`
  height: 100%;
  width: 100%;
  margin-top: 0px !important;
`;

export const NavigationWrapper = styled.div`
  width: 100%;
  height: 64px;
  margin-top: 145px;
  /* display: flex; */
  flex-direction: center;
  align-content: center;
  background-color: #ffd600;
  text-align: center;
`;

export const NavigationButtonWrapper = styled.div`
  /* display: flex; */
  height: 64px;
  line-height: 64px;
  flex-direction: center;
  align-content: space-between;

  button {
    width: 90px;
    border-right: solid 1px white;
  }
`;

export const Freeboard = styled.button`
  border: none;
  background-color: #ffd600;
`;

export const UsedMarket = styled.button`
  border: none;
  background-color: #ffd600;
`;

export const MyPage = styled.button`
  border: none;
  background-color: #ffd600;
  border-right: none !important;
`;
