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
  No,
  Title,
  Date,
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
  BoardList,
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
  onClickDelete,
}) {
  return (
    <ListWrapper>
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

          <BottomWrapper>
            <PageNationWrapper>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data) => (
                <Num1 id={String(data)} onClick={onClickPage1}>
                  {data}
                </Num1>
              ))}
            </PageNationWrapper>
            <PageNumberWrapper>
              <BoardPen src="/pen.png"></BoardPen>
              <BoardRegister>게시물등록하기</BoardRegister>
            </PageNumberWrapper>
          </BottomWrapper>
        </MainBoderListDiv>
      </MainContentDiv>
    </ListWrapper>
  );
}

{
  /* // function getDate(createdAt: any): React.ReactNode {
//   throw new Error("Function not implemented.");
// } */
}
