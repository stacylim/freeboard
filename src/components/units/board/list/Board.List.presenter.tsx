import { getDefaultValues } from "@apollo/client/utilities";
import { Checkbox } from "@material-ui/core";
import React from "react";
import {
  ListWrapper,
  LogoHeaderWrapper,
  ListImageWrapper,
  LoginJoinWrapper,
  Login,
  JoinMember,
  CaruselWrapper,
  HeadWrapper,
  NavigationWrapper,
  Freeboard,
  UpperWrapper,
  UpperboxImg,
  BoardListUIItem,
  BoxTitle,
  BoxhalfbottomWrapper,
  BoxProfileWholeWrapper,
  ProfileWriterWrapper,
  ProfileWriterDateWrapper,
  DateWrapper,
  LikeNumberWrapper,
  MiddleSearchWrapper,
  SearchWrapper,
  Calendar,
  SearchBox,
  BoardWrapper,
  ListbottomWrapper,
  BoardRegister,
  BoardPen,
  Logo1,
  LogoWrapper,
  Logo10,
  Logo11,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  MyPage,
  UsedMarket,
  Upperbox,
  PageNumberWrapper,
  Profile,
  Writer,
  Like,
  BestTitle,
  BoxWrapper,
  TitleWrapper,
  MarkWrapper,
  LogoWholeWrapper,
  CampLogoWrapper,
  NavigationButtonWrapper,
  No,
  Title,
  Date,
  InfiniteScroll,
  RowWrapper,
  MainContentDiv,
  UpperboxContents,
  MainBoderListDiv,
  MainOtherDiv,
  MainBoardListDivs,
  MainBoardList,
  SearchImg,
  SearchInput,
  SearchInputWrapper,
  SearchInputImgWrapper,
} from "./Board.List.styles";

export default function BoardListUI({ data }) {
  return (
    <ListWrapper>
      <LogoHeaderWrapper>
        <LogoWholeWrapper src="/codecamplogo.png"></LogoWholeWrapper>
        {/* <MarkWrapper>
            <Logo1 src="/logo1.png"></Logo1>
            <Logo2 src="/logo2.png"></Logo2>
          </MarkWrapper>
          <CampLogoWrapper>
            <LogoWrapper>
              <Logo3 src="/letterC.png"></Logo3>
              <Logo4 src="/letterO.png"></Logo4>
              <Logo5 src="/letterD.png"></Logo5>
              <Logo6 src="/letterE.png"></Logo6>
              <Logo7 src="/letter..png"></Logo7>
              <Logo8 src="/lettersecondC.png"></Logo8>
              <Logo9 src="/letterA.png"></Logo9>
              <Logo10 src="/letterM.png"></Logo10>
            </LogoWrapper>
            <Logo11 src="/letterP.png"></Logo11>
          </CampLogoWrapper> */}

        <LoginJoinWrapper>
          <Login>로그인</Login>
          <JoinMember>회원가입</JoinMember>
        </LoginJoinWrapper>
      </LogoHeaderWrapper>

      <ListImageWrapper>
        <CaruselWrapper>
          <HeadWrapper></HeadWrapper>
        </CaruselWrapper>
      </ListImageWrapper>

      <NavigationWrapper>
        <NavigationButtonWrapper>
          <Freeboard>자유게시판</Freeboard>
          <UsedMarket>중고마켓</UsedMarket>
          <MyPage>마이페이지</MyPage>
        </NavigationButtonWrapper>
      </NavigationWrapper>

      <MainContentDiv>
        <TitleWrapper>
          <BestTitle>베스트 게시글</BestTitle>
        </TitleWrapper>

        <UpperWrapper>
          <BoxWrapper>
            <Upperbox>
              <UpperboxImg src="/Box1.png"></UpperboxImg>

              <UpperboxContents>
                <BoxTitle>게시물 제목입니다.</BoxTitle>
                <BoxhalfbottomWrapper>
                  <BoxProfileWholeWrapper>
                    <ProfileWriterDateWrapper>
                      <ProfileWriterWrapper>
                        <Profile src="/Profilephoto.png"></Profile>
                        <Writer>노원두</Writer>
                        <DateWrapper>Date: 2021.02.18</DateWrapper>
                      </ProfileWriterWrapper>

                      <LikeNumberWrapper>
                        <Like src="/Like.png"></Like>
                        356
                      </LikeNumberWrapper>
                    </ProfileWriterDateWrapper>
                  </BoxProfileWholeWrapper>
                </BoxhalfbottomWrapper>
              </UpperboxContents>
            </Upperbox>

            <Upperbox>
              <UpperboxImg src="/Box2.png"></UpperboxImg>

              <UpperboxContents>
                <BoxTitle>게시물 제목입니다.</BoxTitle>
                <BoxhalfbottomWrapper>
                  <BoxProfileWholeWrapper>
                    <ProfileWriterDateWrapper>
                      <ProfileWriterWrapper>
                        <Profile src="/Profilephoto.png"></Profile>
                        <Writer>노원두</Writer>
                        <DateWrapper>Date: 2021.02.18</DateWrapper>
                      </ProfileWriterWrapper>

                      <LikeNumberWrapper>
                        <Like src="/Like.png"></Like>
                        356
                      </LikeNumberWrapper>
                    </ProfileWriterDateWrapper>
                  </BoxProfileWholeWrapper>
                </BoxhalfbottomWrapper>
              </UpperboxContents>
            </Upperbox>
            <Upperbox>
              <UpperboxImg src="/Box3.png"></UpperboxImg>

              <UpperboxContents>
                <BoxTitle>게시물 제목입니다.</BoxTitle>

                <BoxhalfbottomWrapper>
                  <BoxProfileWholeWrapper>
                    <ProfileWriterDateWrapper>
                      <ProfileWriterWrapper>
                        <Profile src="/Profilephoto.png"></Profile>
                        <Writer>노원두</Writer>
                        <DateWrapper>Date: 2021.02.18</DateWrapper>
                      </ProfileWriterWrapper>

                      <LikeNumberWrapper>
                        <Like src="/Like.png"></Like>
                        356
                      </LikeNumberWrapper>
                    </ProfileWriterDateWrapper>
                  </BoxProfileWholeWrapper>
                </BoxhalfbottomWrapper>
              </UpperboxContents>
            </Upperbox>

            <Upperbox>
              <UpperboxImg src="/Box4.png"></UpperboxImg>

              <UpperboxContents>
                <BoxTitle>게시물 제목입니다.</BoxTitle>

                <BoxhalfbottomWrapper>
                  <BoxProfileWholeWrapper>
                    <ProfileWriterDateWrapper>
                      <ProfileWriterWrapper>
                        <Profile src="/Profilephoto.png"></Profile>
                        <Writer>노원두</Writer>
                        <DateWrapper>Date: 2021.02.18</DateWrapper>
                      </ProfileWriterWrapper>

                      <LikeNumberWrapper>
                        <Like src="/Like.png"></Like>
                        356
                      </LikeNumberWrapper>
                    </ProfileWriterDateWrapper>
                  </BoxProfileWholeWrapper>
                </BoxhalfbottomWrapper>
              </UpperboxContents>
            </Upperbox>
          </BoxWrapper>
        </UpperWrapper>

        <MiddleSearchWrapper>
          <SearchWrapper>
            <SearchInputImgWrapper>
              <SearchImg src="/searchimg.png"></SearchImg>
              <SearchInputWrapper>
                <SearchInput
                  name="searchinput"
                  type="text"
                  placeholder="제목을 검색해주세요."
                />
              </SearchInputWrapper>
            </SearchInputImgWrapper>
          </SearchWrapper>
          <Calendar>캘린더</Calendar>
          <SearchBox>검색하기</SearchBox>
        </MiddleSearchWrapper>

        <MainBoderListDiv>
          <MainBoardList style={{ fontWeight: "bold" }}>
            <div> 번호 </div>
            <div> 제목 </div>
            <div> 작성자 </div>
            <div> 날짜 </div>
          </MainBoardList>
          <MainBoardListDivs>
            {data.map((el, key) => {
              return (
                <MainBoardList key={key} style={{ color: "#ababab" }}>
                  <div> {key + 1} </div>
                  <div> {el.title} </div>
                  <div> {el.writer} </div>
                  <div> {el.createdAt.slice(0, 10)} </div>
                </MainBoardList>
              );
            })}
          </MainBoardListDivs>
        </MainBoderListDiv>
      </MainContentDiv>

      {/* <Checkbox type="checkbox" onClick={handleCheckAll} checked={checkedAll} />

           {/* <InfiniteScroll loadmore={onLoadMore} hasMore={true} height={1000}> */}

      {/* // </InfiniteScroll> */}

      <ListbottomWrapper>
        {/* <PageNumberWrapper> 1 2 </PageNumberWrapper> */}
        <PageNumberWrapper>
          <BoardPen src="/pen.png"></BoardPen>
          <BoardRegister>게시물등록하기</BoardRegister>
        </PageNumberWrapper>
      </ListbottomWrapper>
    </ListWrapper>
  );
}
