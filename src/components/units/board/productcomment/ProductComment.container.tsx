import ProductCommentUI from "./ProductComment.presenter";
import { CREATE_USED_ITEM_QUESTION } from "./ProductComment.queries";
import { useRouter } from "next/router";
import { fallbackHttpConfig, useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./ProductComment.queries";
import { useState } from "react";
import { UPDATE_BOARD_COMMENT } from "./ProductComment.queries";
import { DELETE_BOARD_COMMENT } from "./ProductComment.queries";

//TODO 1. 게시글 상세보기 밑에 댓글 컴포넌트 달기
//TODO 2. 댓글 작성한 내용을 담을 수 있는 State만들기 / 내용, 작성자 등이 들어갈 듯
//TODO 3. 댓글 작성 Mutation 만들기
//TODO 4. 게시글 주소에 있는 ID를 가져와서 댓글 뮤테이션 이용하기

//TODO 5. 게시글 댓글 불러오는 Query 만들기
//TODO 6. 받아온 댓글 데이터 화면에 뿌려주기

const inputsInit = {
  //요청하는 정보를 넣는 곳이므로 argument, typedetails에서만 가능

  contents: "",
};

// export default function ProductComment() {
//   return <ProductCommentUI />;
// }

export default function ProductComment() {
  const [inputs, setInputs] = useState(inputsInit);
  // // const [rating, setRating] = useState(0);
  // //숫자값을 받을때는 State 안에 0을 넣으면 된다.
  const router = useRouter();
  // const [page, setPage] = useState(1);
  const { data } = useMutation(CREATE_USED_ITEM_QUESTION, {
    variables: { contents: "contents", useditemId: String(router.query.id) },
  });
  const [createUseditemQuestionInput] = useMutation(CREATE_USED_ITEM_QUESTION);

  const onChangeInput = (event) => {
    inputs[event.target.name] = event.target.value;
    setInputs(inputs);
    //객체에 접근하기 위해서 대괄호가 필요하다.
  };

  // //댓글등록
  // const onClickAsk = async () => {
  //   try {
  //     const result = await createUseditemQuestion({
  //       variables: {
  //         createUseditemQuestionInput: {
  //           contents: inputs.contents,
  //         },
  //         useditemId: String(router.query.id),
  //       },
  //       아폴로독스설명서를 봐야함
  //       refetchQueries: [
  //         {
  //           query: FETCH_BOARD_COMMENT,
  //           variables: { boardId: String(router.query.id) },
  //         },
  //       ],
  //     });
  //     alert("문의사항이 성공적으로 등록되었습니다.");
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };
  // const starArr = new Array(5).fill(1);
  // // starArr = [1, 1, 1, 1, 1];
  // const saveRating = (score) => {
  //   const obj = { ...inputs };
  //   obj.rating = score;
  //   console.log(obj);
  //   setInputs(obj);
  //   // setRating(score);
  // };
  return (
    <ProductCommentUI
      data={data}
      // onClickAsk={onClickAsk}
      // starArr={starArr}
      // saveRating={saveRating}
      inputs={inputs}
      onChangeInput={onChangeInput}
      // loadMore={loadMore}
    />
  );
}
// // function fetchMore(arg0: {
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
