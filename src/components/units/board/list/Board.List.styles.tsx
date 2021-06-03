import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: none;
`;

export const LogoHeaderWrapper = styled.div`
  width: 100%;
  height: 120px;
  /* display: flex; */
  flex-direction: row;
  position: fixed;
  align-content: space-between;
  display: grid;
  grid-template-columns: 70% auto;
  background-color: white;
  padding-top: 30px;
`;

export const MarkWrapper = styled.div`
  height: 36px;
  padding-left: 100px;
  display: flex;
`;

export const LogoWholeWrapper = styled.img`
  margin-left: 80px;
`;

export const ListImageWrapper = styled.div`
  height: 200px;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  padding-left: 10px;
  align-content: center;
`;

export const Logo1 = styled.img`
  width: 15.73px;
  height: 36px;
`;
export const Logo2 = styled.img`
  width: 15.73px;
  height: 36px;
  margin-left: 8px;
`;
export const Logo3 = styled.img`
  width: 17.28px;
  height: 20.69px;
`;
export const Logo4 = styled.img`
  width: 18.71px;
  height: 20.69px;
`;
export const Logo5 = styled.img`
  width: 17.98px;
  height: 28.7px;
`;
export const Logo6 = styled.img`
  width: 18.15px;
  height: 20.69px;
`;
export const Logo7 = styled.img`
  width: 6.23px;
  height: 6.41px;
`;
export const Logo8 = styled.img`
  width: 17.28px;
  height: 20.69px;
`;
export const Logo9 = styled.img`
  width: 17.85px;
  height: 20.63px;
`;
export const Logo10 = styled.img`
  width: 28.12px;
  height: 20.33px;
`;
export const Logo11 = styled.img`
  padding-top: 8px;
  width: 17.96x;
  height: 34px;
`;
export const CampLogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
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
export const CaruselWrapper = styled.div``;

export const HeadWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavigationWrapper = styled.div`
  width: 100%;
  height: 64px;
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

export const UpperWrapper = styled.div`
  /* display: flex; */
  flex-direction: column;
  align-content: center;
  margin-top: 20px;
`;

export const TitleWrapper = styled.div`
  /* display: flex; */
  flex-direction: row;
  align-content: center;
  text-align: center;
  font-size: 36px;
`;

export const MainContentDiv = styled.div`
  padding: 0px 8%;
  //앞에수치는 위아래, 뒤에는 좌우 여백 값.
  // = padding : 0px 0px 10% 10%
`;

export const BestTitle = styled.div`
  /* width: 208px; */
  height: 60px;
  margin-top: 50px;
  font-weight: bold;
  /* padding-top: 100px; */
`;

export const Upperbox = styled.div`
  /* width: 282px; */
  /* display: inline-block; */
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  height: 257px;
  margin: 0px 15px;
`;

export const BoxWrapper = styled.div`
  /* display: flex; */
  flex-direction: row;
  display: grid;
  grid-template-columns: repeat(4, 25%);
`;

export const UpperboxImg = styled.img`
  /* width: 282px; */
  height: 120px;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const UpperboxContents = styled.div`
  padding: 8px 15px;
`;

export const BoxTitle = styled.div`
  height: 60px;
  line-height: 40px;
`;

export const BoxhalfbottomWrapper = styled.div`
  /* display: flex; */
  flex-direction: row;
  align-content: space-between;
`;
export const BoxProfileWholeWrapper = styled.div`
  /* display: flex; */
  flex-direction: row;
  align-content: space-between;
`;

export const ProfileWriterWrapper = styled.div`
  /* width: 100px; */
  /* display: flex; */
  flex-direction: row;
`;
export const ProfileWriterDateWrapper = styled.div`
  /* width: 80px; */
  /* display: flex; */
  flex-direction: column;
  align-content: space-between;
  display: grid;
  grid-template-columns: 80% auto;
`;

export const Profile = styled.img`
  width: 20px;
  height: 20px;
`;

export const DateWrapper = styled.div`
  font-size: 12px;
  color: #828282;
  height: 30px;
  line-height: 30px;
`;

export const LikeNumberWrapper = styled.div`
  /* padding-left: 40px; */
  /* width: 25px; */
  /* display: flex; */
  flex-direction: column;
  align-content: right;
  font-size: 12px;
  line-height: 25px;
`;
export const MiddleSearchWrapper = styled.div`
  display: flex;
  flex-direction: row;

  min-height: 50px;
  line-height: 50px;
  padding-top: 40px;
  width: 1920px;
`;

export const SearchInputImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f2f2f2;
  height: 52px;
  align-content: center;
  width: 488px;
`;

export const SearchWrapper = styled.div`
  width: 488px;
  border: none;
`;

export const Calendar = styled.div`
  width: 282px;
`;

export const SearchBox = styled.button`
  background-color: black;
  color: white;
  text-align: center;
  width: 94px;
  height: 52px;
  font-size: 18px;
`;
export const BoardWrapper = styled.div``;
export const ListbottomWrapper = styled.div`
  margin-top: 100px;
  height: 50px;
  width: 1920px;
`;
export const PageNumberWrapper = styled.div`
  width: 200px;
  height: 52px;
  display: flex;
  flex-direction: row;
`;

export const BoardRegister = styled.div`
  background-color: white;
  margin-left: 15px;
`;
export const BoardPen = styled.img`
  width: 18px;
  height: 18px;
`;

export const BoardListUIItem = styled.div``;

export const Writer = styled.div`
  width: 70%;
  display: inline-block;
  padding-left: 5px;
`;

export const Like = styled.img`
  width: 20px;
  height: 18px;
`;
export const Title = styled.div``;

export const No = styled.div``;

export const Date = styled.div``;

export const InfiniteScroll = styled.div``;

export const RowWrapper = styled.div``;

export const MainBoderListDiv = styled.div`
  margin-top: 60px;
  min-height: 300px;
  border-top: solid 1px #000000;
  border-bottom: solid 1px #000000;
  text-align: center;
  margin-top: 30px;
`;

export const MainOtherDiv = styled.div``;
export const MainBoardListDivs = styled.div``;
export const MainBoardList = styled.div`
  display: grid;
  grid-template-columns: 10% 50% 25% 15%;
  min-height: 40px;
  line-height: 40px;
  border-bottom: solid 1px #ababab;
`;

export const SearchImg = styled.img`
  width: 17.49px;
  height: 17.49px;
  background-color: #f2f2f2;
  margin-left: 18px;
  margin-top: 18px;
`;

export const SearchInputWrapper = styled.div`
  width: 400px;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding-left: 20px;
`;

export const SearchInput = styled.input`
  width: 141px;
  background-color: #f2f2f2;
  border: none;
  font-size: 16px;
`;
