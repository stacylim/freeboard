import BoardCommentUI from "./BoardComment.presenter";
import { FETCH_BOARD_COMMENT } from "./BoardComment.queries";
import { useRouter } from "next/router";
import { fallbackHttpConfig, useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./BoardComment.queries";
import { useState } from "react";
import { UPDATE_BOARD_COMMENT } from "./BoardComment.queries";
import { DELETE_BOARD_COMMENT } from "./BoardComment.queries";

const inputsInit = {
  //요청하는 정보를 넣는 곳이므로 argument, typedetails에서만 가능

  writer: "",
  password: "",
  contents: "",
  rating: 0,
};

export default function BoardComment() {
  const [inputs, setInputs] = useState(inputsInit);
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENT, {
    variables: { boardId: String(router.query.id) },
  });

  console.log(data, "ㅁㄴㅇ");
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  //댓글등록
  const onClickRegister = async () => {
    try {
      const result = await createBoardComment({
        variables: {
          createBoardCommentInput: {
            writer: inputs.writer,
            password: inputs.password,
            contents: inputs.contents,
            rating: inputs.rating,
          },

          boardId: String(router.query.id),
        },
        //아폴로독스설명서를 봐야함
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENT,
            variables: { boardId: String(router.query.id) },
          },
        ],
      });

      alert("댓글이 성공적으로 등록되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  return <BoardCommentUI data={data} onClickRegister={onClickRegister} />;
}
