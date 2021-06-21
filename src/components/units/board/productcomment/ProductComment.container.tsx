import ProductCommentUI from "./ProductComment.presenter";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";

import {
  CREATE_USED_ITEM_QUESTION,
  FETCH_USED_ITEM_QUESTIONS,
} from "./ProductComment.queries";

// TODO 1. 게시글 상세보기 밑에 댓글 컴포넌트 달기
// TODO 2. 댓글 작성한 내용을 담을 수 있는 State만들기 / 내용, 작성자 등이 들어갈 듯
// TODO 3. 댓글 작성 Mutation 만들기
// TODO 4. 게시글 주소에 있는 ID를 가져와서 댓글 뮤테이션 이용하기

// TODO 5. 게시글 댓글 불러오는 Query 만들기
// TODO 6. 받아온 댓글 데이터 화면에 뿌려주기

export default function ProductComment() {
  const [inputs, setInputs] = useState({
    name: "",
    contents: "",
  });
  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const router = useRouter();
  const [page, setPage] = useState(1);
  const { data: useddata, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { page: page, useditemId: String(router.query.id) },
  });

  const { data } = useMutation(CREATE_USED_ITEM_QUESTION, {
    variables: { contents: "contents", useditemId: String(router.query.id) },
  });
  const [createUseditemQuestions] = useMutation(CREATE_USED_ITEM_QUESTION);

  const onChangeInput = (event) => {
    inputs[event.target.name] = event.target.value;
    setInputs(inputs);
  };

  const onClickAsk = async () => {
    try {
      const result = await createUseditemQuestions({
        variables: {
          createUseditemQuestion: {
            name: inputs.name,
            contents: inputs.contents,
          },
          boardId: String(router.query.id),
        },
        //아폴로독스설명서를 봐야함
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { page: page, useditemId: String(router.query.id) },
          },
        ],
      });

      alert("댓글이 성공적으로 등록되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ProductCommentUI
      data={data}
      onClickAsk={onClickAsk}
      inputs={inputs}
      onChangeInput={onChangeInput}
    />
  );
}
