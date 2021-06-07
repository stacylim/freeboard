import { getDefaultValues } from "@apollo/client/utilities";
import { Checkbox } from "@material-ui/core";
import { render } from "react-dom";
import Carousel from "react-img-carousel";
import React from "react";

import {
  ListWrapper,
  LogoHeaderWrapper,
  ListImageWrapper,
  LoginJoinWrapper,
  Login,
  JoinMember,
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
  Num1,
  LogoWrapper,
  Num10,
  Logo11,
  Num2,
  Num3,
  Num4,
  Num5,
  Num6,
  Num7,
  Num8,
  Num9,
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
  Carouselmg,
  BottomWrapper,
  PageNationWrapper,
  CarouselWrapper,
} from "./Board.List.styles";
require("react-img-carousel/lib/carousel.css");

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function BoardListUI({
  data,
  boardCount,
  saveSearch,
  onClickSearchBox,
  onClickPage1,
}) {
  return (
    <ListWrapper>
      {/* <LogoHeaderWrapper>
        <LogoWholeWrapper src="/codecamplogo.png"></LogoWholeWrapper>
   
        <LoginJoinWrapper>
          <Login>로그인</Login>
          <JoinMember>회원가입</JoinMember>
        </LoginJoinWrapper>
      </LogoHeaderWrapper>

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

      <NavigationWrapper>
        <NavigationButtonWrapper>
          <Freeboard>자유게시판</Freeboard>
          <UsedMarket>중고마켓</UsedMarket>
          <MyPage>마이페이지</MyPage>
        </NavigationButtonWrapper>
      </NavigationWrapper> */}

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
                  onChange={saveSearch}
                />
                {/* 인풋에있는 글자가 변경됐을때 세이브서치라는 함수를 실행 */}
              </SearchInputWrapper>
            </SearchInputImgWrapper>
          </SearchWrapper>
          <Calendar>캘린더</Calendar>
          <SearchBox onClick={onClickSearchBox}>검색하기</SearchBox>
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

        {/* <ListbottomWrapper>
          {/* <ReactPaginateB
            pageCount={10}
            initialPage={1}
            pageRangeDisplayed={boardCount}
            marginPagesDisplayed={10}
            //지정한 페이지수 가운데에서 양쪽으로 몇페이지가 나오는지 정하면 됨
          ></ReactPaginate> */}
        {/* </ListbottomWrapper> */}
      </MainContentDiv>

      {/* <Checkbox type="checkbox" onClick={handleCheckAll} checked={checkedAll} />

           {/* <InfiniteScroll loadmore={onLoadMore} hasMore={true} height={1000}> */}

      {/* // </InfiniteScroll> */}

      <BottomWrapper>
        <PageNationWrapper>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => (
            <Num1 id={data} onClick={onClickPage1}>
              {data}
            </Num1>
          ))}
          {/* <Num2 onClick={onClickPage2}>2</Num2>
          <Num3 onClick={onClickPage3}>3</Num3>
          <Num4 onClick={onClickPage4}>4</Num4>
          <Num5 onClick={onClickPage5}>5</Num5>
          <Num6 onClick={onClickPage6}>6</Num6>
          <Num7 onClick={onClickPage7}>7</Num7>
          <Num8 onClick={onClickPage8}>8</Num8>
          <Num9 onClick={onClickPage9}>9</Num9>
          <Num10 onClick={onClickPage10}>10</Num10> */}
        </PageNationWrapper>
        <PageNumberWrapper>
          <BoardPen src="/pen.png"></BoardPen>
          <BoardRegister>게시물등록하기</BoardRegister>
        </PageNumberWrapper>
      </BottomWrapper>
    </ListWrapper>
  );
}
