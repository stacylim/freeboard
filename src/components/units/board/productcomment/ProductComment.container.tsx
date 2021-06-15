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

  // const [rating, setRating] = useState(0);
  //숫자값을 받을때는 State 안에 0을 넣으면 된다.

  const router = useRouter();
  const [page, setPage] = useState(1);
  const { data, fetchMore } = useQuery(FETCH_BOARD_COMMENT, {
    variables: { page: page, boardId: String(router.query.id) },
  });

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const onChangeInput = (event) => {
    inputs[event.target.name] = event.target.value;
    setInputs(inputs);
    //객체에 접근하기 위해서 대괄호가 필요하다.
    console.log(inputs, event.target.name);
  };

  const loadMore = () => {
    //

    console.log(data?.fetchBoardComments.length);
    if (data?.fetchBoardComments.length % 10 !== 0) {
      return;
    }

    fetchMore({
      //page값을 여기서 추가해줬는데, 위의 fetchMore useQuery에서는 페이지값이 없어서서 오류가 낫었다.
      //useQuery variables 안에 페이지값을 추가+ 페이지 스테이트값을 추가함에 따라 오류 해결

      variables: { page: Math.floor(data?.fetchBoardComments.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => ({
        //fetchMore로 데이터를 받아온 후 작업을 해주세요. <div className=""></div>
        fetchBoardComments: [
          ...prev.fetchBoardComments,
          ...fetchMoreResult.fetchBoardComments,
        ],
        //배열을 연결하기위해 스프레드 ....
      }),
    });
  };

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

  const starArr = new Array(5).fill(1);
  // starArr = [1, 1, 1, 1, 1];

  const saveRating = (score) => {
    const obj = { ...inputs };
    obj.rating = score;

    console.log(obj);
    setInputs(obj);

    // setRating(score);
  };

  return (
    <BoardCommentUI
      data={data}
      onClickRegister={onClickRegister}
      starArr={starArr}
      saveRating={saveRating}
      inputs={inputs}
      onChangeInput={onChangeInput}
      loadMore={loadMore}
    />
  );
}
// function fetchMore(arg0: {
//   variables: { page: number };
//   updateQuery: (
//     prev: any,
//     { fetchMoreResult }: { fetchMoreResult: any }
//   ) => {
//     //fetchMore로 데이터를 받아온 후 작업을 해주세요. <div className=""></div>
//     //fetchMore로 데이터를 받아온 후 작업을 해주세요. <div className=""></div>
//     fetchBoards: any[];
//   };
// }) {
//   throw new Error("Function not implemented.");
// }
