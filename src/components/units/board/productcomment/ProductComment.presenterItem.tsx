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
  ProfilePhoto,
  Commentcontents,
  CommentDate,
  EditBox,
  Pencil,
  ProfileName,
  Xmark,
  CommentBoxWrapper,
} from "./ProductComment.styles";
import router, { useRouter } from "next/router";
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

// Modal.setAppElement("body");

const ProductCommentUIItem = (data) => {
  console.log(data);
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [updateInit, setUpdateInit] = useState(inputupdateInit);

  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  const onClickEdit = async () => {
    const result = await updateUseditemQuestion({
      //Arguments에서 꼭 보내야하는 애들
      variables: {
        updateUseditemQuestion: {
          contents: updateInit.contents,
        },
        useditemQuestionId: data._id,
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
  const onClickDelete = async () => {
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
      // setModal(false);
      // console.log(result);
    } catch (error) {
      alert(error.message);
      //댓글이 삭제된 시점에서 모달창이 꺼져야 하므로 모달 =false로 다시 만들어줘야한다.
    }
  };
  {
    return (
      <div>
        <ProfilePhoto src="/Profilephoto.png"></ProfilePhoto>
        <CommentBoxWrapper>
          <ProfileName>{data?.fetchUseditemQuestions.user}</ProfileName>
          <EditBox>
            <Pencil
              id={data._id}
              src="/EditImg.png"
              onClick={onClickEdit}
            ></Pencil>
            <Xmark
              id={data._id}
              src="/DeleteImg.png"
              onClick={onClickDelete}
            ></Xmark>
          </EditBox>
        </CommentBoxWrapper>
        <Commentcontents>
          {data?.fetchUseditemQuestions.contents}
        </Commentcontents>
        <CommentDate>
          {data?.fetchUseditemQuestions.createdAt.slice(0, 10)}
        </CommentDate>
      </div>
    );
  }
};
export default ProductCommentUIItem;
