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
  ProfileWrapper,
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
  RestWrapper,
  CommentWholeWrapper,
  CommentcontentsInput,
  CommentDateInput,
} from "./ProductComment.styles";
import router, { useRouter } from "next/router";
import { common } from "@material-ui/core/colors";
import { CommentUpdateButton } from "../Comments/BoardComment.styles";

const inputupdateInit = {
  contents: "",
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
//데이터를 받을 때는 중괄호로 데이터를 한번 감싸주면, 맵으로 돌려서 하나씩 넘기는 데이터를 받을 수 있다.

const ProductCommentUIItem = ({ data }) => {
  console.log(1);
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [updateInit, setUpdateInit] = useState(inputupdateInit);

  const [updateUseditemQuestion] = useMutation(UPDATE_USED_ITEM_QUESTION);
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);

  //댓글수정연필버튼 눌렀을때 상태변경
  const onClickEdit = () => {
    setIsEdit(true);
  };

  //삭제버튼 눌렀을때 알람창=모달창
  const [modal, setModal] = useState(false);
  const [page, setPage] = useState(1);
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
            variables: { page: page, useditemId: String(router.query.id) },
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

  const onClickUpdate = async () => {
    const result = await updateUseditemQuestion({
      //Arguments에서 꼭 보내야하는 애들
      variables: {
        updateUseditemQuestionInput: {
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

  const onChangeInput = (event) => {
    setUpdateInit({
      ...updateInit,
      //기존updateInit을 활용하여, 데이터를 집어넣어주고, 변경되는 아이들은 밑에서 setUpdateInit으로 나온다.
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <CommentWholeWrapper>
        <ProfileWrapper>
          <ProfilePhoto src="/Profilephoto.png" />
        </ProfileWrapper>
        <RestWrapper>
          <CommentBoxWrapper>
            {/* 앞에서 이미 fetch로 받아왔으므로 여기서는 바로 그 다음 항목을 불러오면 된다. */}
            <ProfileName>{data?.user.name}</ProfileName>
            <EditBox>
              <Pencil id={data._id} src="/EditImg.png" onClick={onClickEdit} />
              <Xmark
                id={data._id}
                src="/DeleteImg.png"
                onClick={onClickDelete}
              />
            </EditBox>
          </CommentBoxWrapper>
          {isEdit && (
            <>
              <div>
                <CommentcontentsInput
                  name="contents"
                  type="text"
                  placeholder="댓글 수정해주세요."
                  onChange={onChangeInput}
                  defaultValue={data?.contents}
                />
                {/* <CommentDateInput> */}
                {/* {data?.updatedAt.slice(0, 10)} */}
                {/* </CommentDateInput> */}
              </div>
              <div>
                <CommentUpdateButton onClick={onClickUpdate}>
                  댓글수정완료
                </CommentUpdateButton>
              </div>
            </>
          )}
          {/*//조건부렌더링*/}
          {!isEdit && (
            <>
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
                // onChange={onChange}
                // type="password"
                // placeholder="비밀번호"
                ></ModalInput>
                <ModalButton onClick={onClickDelete}>댓글삭제</ModalButton>;
              </Modal>

              <Commentcontents>{data?.contents}aaa</Commentcontents>
              <CommentDate>{data?.createdAt.slice(0, 10)}</CommentDate>
            </>
          )}
        </RestWrapper>
      </CommentWholeWrapper>
    </>
  );
};

export default ProductCommentUIItem;
