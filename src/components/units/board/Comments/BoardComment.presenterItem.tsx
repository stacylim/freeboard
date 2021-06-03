import { useState } from "react";
import BoardCommentUI from "./BoardComment.presenter";
import { useMutation } from "@apollo/client";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./BoardComment.queries";

import {
  ReplyBox1,
  Box1Content,
  ProfileWrapper,
  Profile,
  Box1InnerWrapper,
  InnerCenterWrapper,
  WriterStarWrapper,
  WriterWrapper,
  Writer,
  StarsWrapper2,
  YellowStar,
  Star,
  Date,
  RightWrapper,
  EditIMG,
  DeleteIMG,
  EditReplyWriterPasswordWrapper,
  EditReplyWriter,
  EditReplyPassword,
  EditReplyStarsWrapper,
  EditReplyContentWrapper,
  EditReplyContent,
  EditCountingRegisterWrapper,
  EditCountingWrapper,
  EditReplyRegister,
  EditReplyCounting,
} from "./BoardComment.styles";
import { useRouter } from "next/router";

const inputupdateInit = {
  writer: "",
  password: "",
  contents: "",
  rating: 0,
};
const BoardCommentUIItem = ({ data }) => {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [updateInit, setUpdateInit] = useState(inputupdateInit);

  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  //댓글수정연필버튼 눌렀을때 상태변경
  const onClickEdit = () => {
    setIsEdit(true);
  };

  //수정후 수정하기버튼 눌렀을때
  const onClickUpdate = async () => {
    const result = await updateBoardComment({
      //Arguments에서 꼭 보내야하는 애들
      variables: {
        updateBoardCommentInput: {
          contents: updateInit.contents,
          rating: updateInit.rating,
        },
        password: updateInit.password,
        boardCommentId: data._id,
      },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENT,
          variables: { boardId: String(router.query.id) },
          //FETCH_BOARD_COMMENT를 사용했을때, variables를 어떻게 사용했는지 확인 후 그대로 가져오면 된다.
        },
      ],
      //updateInit에 우리가 넣어주는 writer,password,contents,rating variables에 들어가지만, 변경이 되지않는 boardCommentID는 백엔드로부터 어떻게 받아오는지 확인 후 넣어줘야함.
    });
    setIsEdit(false);
  };

  const onClickDelete = async (event) => {
    try {
      console.log(event.target.id);
      const result = await deleteBoardComment({
        //Arguments에서 꼭 보내야하는 애들
        variables: {
          password: "",
          boardCommentId: event.target.id,
        },

        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: { boardId: String(router.query.id) },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeInput = (event) => {
    setUpdateInit({
      ...updateInit,
      //기존updateInit을 활용하여, 데이터를 집어넣어주고, 변경되는 아이들은 밑에서 setUpdateInit으로 나온다.
      [event.target.name]: event.target.value,
    });
  };

  //수정버튼 눌렀을때 state로 수정페이지가 보이게 하듯이, onChange도 스테이트를 활용하여 저장되게 한다.
  return (
    <>
      {isEdit && (
        <>
          <EditReplyWriterPasswordWrapper>
            <EditReplyWriter
              name="writer"
              type="text"
              placeholder={data.writer}
              onChange={onChangeInput}
              defaultValue={data?.writer}
            />

            <EditReplyPassword
              name="password"
              type="password"
              placeholder={data.password}
              onChange={onChangeInput}
              defaultValue={data?.password}
            />

            <EditReplyStarsWrapper>
              <YellowStar src="/YellowStar.png"></YellowStar>
              <YellowStar src="/YellowStar.png"></YellowStar>
              <YellowStar src="/YellowStar.png"></YellowStar>
              <Star src="/Star.png"></Star>
              <Star src="/Star.png"></Star>
            </EditReplyStarsWrapper>
          </EditReplyWriterPasswordWrapper>
          <EditReplyContentWrapper>
            <EditReplyContent
              name="contents"
              type="text"
              placeholder="진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!."
              onChange={onChangeInput}
              defaultValue={data?.content}
            />
          </EditReplyContentWrapper>
          <EditCountingRegisterWrapper>
            <EditCountingWrapper>
              <EditReplyCounting>0/100</EditReplyCounting>
            </EditCountingWrapper>
            <EditReplyRegister onClick={onClickUpdate}>
              수정하기
            </EditReplyRegister>
          </EditCountingRegisterWrapper>
        </>
      )}
      {/*//조건부렌더링*/}
      {!isEdit && (
        <ReplyBox1>
          <ProfileWrapper>
            <Profile src="/Profilephoto.png"></Profile>
            <Box1InnerWrapper>
              <InnerCenterWrapper>
                <WriterStarWrapper>
                  <WriterWrapper>
                    <Writer>{data.writer}</Writer>
                    <StarsWrapper2>
                      <YellowStar src="/YellowStar.png"></YellowStar>
                      <YellowStar src="/YellowStar.png"></YellowStar>
                      <YellowStar src="/YellowStar.png"></YellowStar>
                      <Star src="/Star.png"></Star>
                      <Star src="/Star.png"></Star>
                    </StarsWrapper2>
                  </WriterWrapper>
                </WriterStarWrapper>

                <Box1Content>{data.contents}</Box1Content>
                <Date>{data.createdAt.slice(0, 10)}</Date>
              </InnerCenterWrapper>
              <RightWrapper>
                <EditIMG
                  id={data._id}
                  src="/EditImg.png"
                  onClick={onClickEdit}
                ></EditIMG>
                <DeleteIMG
                  id={data._id}
                  src="/DeleteImg.png"
                  onClick={onClickDelete}
                ></DeleteIMG>
              </RightWrapper>
            </Box1InnerWrapper>
          </ProfileWrapper>
        </ReplyBox1>
      )}
      {/* 수정은 스테이트로 관리, 스테이트가 트루면, 수정화면 보이게 하고 false면, 지금화면 그대로 
         //새로운 화면이 나오게끔! */}
    </>
  );
};

export default BoardCommentUIItem;
