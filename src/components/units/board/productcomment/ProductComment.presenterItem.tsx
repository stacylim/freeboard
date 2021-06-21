import React, { useState } from "react";
import ProductCommentUI from "./ProductComment.presenter";
import { useMutation } from "@apollo/client";
import Modal from "react-modal";

import {
  FETCH_USED_ITEM_QUESTIONS,
  CREATE_USED_ITEM_QUESTION,
  UPDATE_USED_ITEM_QUESTION,
  DELETE_USED_ITEM_QUESTION,
} from "./ProductComment.queries";

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
  Date,
  RightWrapper,
  EditIMG,
  DeleteIMG,
  EditReplyWriterPasswordWrapper,
  EditReplyWriter,
  EditReplyContentWrapper,
  EditReplyContent,
  EditCountingRegisterWrapper,
  EditCountingWrapper,
  EditReplyRegister,
  EditReplyCounting,
  ModalInput,
  ModalButton,
} from "./ProductComment.styles";
import { useRouter } from "next/router";
import { common } from "@material-ui/core/colors";

const inputupdateInit = {
  writer: "",
  password: "",
  contents: "",
  rating: 0,
};

const modalcustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("body");

const ProductCommentUIItem = ({ data }) => {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [updateInit, setUpdateInit] = useState(inputupdateInit);

  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  //댓글수정연필버튼 눌렀을때 상태변경
  const onClickEdit = () => {
    setIsEdit(true);
  };
  const [password, SetPassword] = useState("");

  //삭제버튼 눌렀을때 알람창=모달창
  const [modal, setModal] = useState(false);

  const onChange = (event) => {
    SetPassword(event.target.value);
    //Input값이 변경이되면 자동으로 State값을 저장해주는 것
  };

  const onClickCommentDelete = async () => {
    console.log(password, data._id);
    try {
      await deleteUseditemQuestion({
        //Arguments에서 꼭 보내야하는 애들
        variables: {
          useditemQuestionId: data._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: String(router.query.id) },
          },
        ],
      });
      alert("댓글이 삭제되었습니다.");
      setModal(false);
      // console.log(result);
    } catch (error) {
      alert(error.message);
      //댓글이 삭제된 시점에서 모달창이 꺼져야 하므로 모달 =false로 다시 만들어줘야한다.
    }
  };

  //수정후 수정하기버튼 눌렀을때
  const onClickUpdate = async () => {
    const result = await updateUseditemQuestion({
      //Arguments에서 꼭 보내야하는 애들
      variables: {
        updateUseditemQuestionInput: {
          contents: updateInit.contents,
          rating: updateInit.rating,
        },
        password: updateInit.password,
        useditemId: data._id,
      },
      refetchQueries: [
        {
          query: FETCH_USED_ITEM_QUESTIONS,
          variables: { useditemId: String(router.query.id) },
          //FETCH_BOARD_COMMENT를 사용했을때, variables를 어떻게 사용했는지 확인 후 그대로 가져오면 된다.
        },
      ],
      //updateInit에 우리가 넣어주는 writer,password,contents,rating variables에 들어가지만, 변경이 되지않는 boardCommentID는 백엔드로부터 어떻게 받아오는지 확인 후 넣어줘야함.
    });
    setIsEdit(false);
  };

  const onClickDelete = async (event) => {
    setModal(true);
    return;
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
          </EditReplyWriterPasswordWrapper>
          <EditReplyContentWrapper>
            <EditReplyContent
              name="contents"
              type="text"
              placeholder="내용을 입력해주세요."
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
          <Modal
            isOpen={modal}
            onRequestClose={() => setModal(false)}
            //React모달 공식문서에 있으며, setModal(false)일때만 모달창이 닫힐 수 있도록 해준다.
            //대부분 모달의 기본기능이며, 창 외 영역을 클릭해주면 화면이 닫힘.
            //setModal()=> 보통 화살표 함수없이 함수를 실행하게 되면, 자동으로 실행이 되므로, 그것을 방지하기 위해
            //무한 반복을 막기위해서 클릭했을때 화살표 함수가 필요하다.
            style={modalcustomStyles}
          >
            <ModalInput
              onChange={onChange}
              type="password"
              placeholder="비밀번호"
            ></ModalInput>
            <ModalButton onClick={onClickCommentDelete}>댓글삭제</ModalButton>;
          </Modal>

          <ProfileWrapper>
            <Profile src="/Profilephoto.png"></Profile>
            <Box1InnerWrapper>
              <InnerCenterWrapper>
                <WriterStarWrapper>
                  <WriterWrapper>
                    <Writer>{data.writer}</Writer>
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

export default ProductCommentUIItem;
