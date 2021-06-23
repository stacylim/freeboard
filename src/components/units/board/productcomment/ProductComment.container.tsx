import ProductCommentUI from "./ProductComment.presenter";
import { useRouter } from "next/router";
import { useQuery, useMutation, useApolloClient } from "@apollo/client";
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
    contents: "",
  });

  const [createUseditemQuestion] = useMutation(CREATE_USED_ITEM_QUESTION);

  const router = useRouter();
  const [page, setPage] = useState(1);
  const { data: questions, fetchMore } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { page: page, useditemId: String(router.query.id) },
  });
  console.log(questions);
  const [createUseditemQuestions] = useMutation(CREATE_USED_ITEM_QUESTION);

  const onChangeInput = (event) => {
    inputs[event.target.name] = event.target.value;
    setInputs(inputs);
  };
  const loadMore = () => {
    //

    console.log(questions?.fetchUseditemQuestions?.length);
    if (questions?.fetchUseditemQuestions?.length % 10 !== 0) {
      return;
    }

    fetchMore({
      //page값을 여기서 추가해줬는데, 위의 fetchMore useQuery에서는 페이지값이 없어서서 오류가 낫었다.
      //useQuery variables 안에 페이지값을 추가+ 페이지 스테이트값을 추가함에 따라 오류 해결

      variables: {
        page: Math.floor(questions?.fetchUseditemQuestions?.length / 10) + 1,
        useditemId: String(router.query.id),
      },
      updateQuery: (prev, { fetchMoreResult }) => ({
        //fetchMore로 데이터를 받아온 후 작업을 해주세요. <div className=""></div>
        fetchUseditemQuestions: [
          ...prev.fetchUseditemQuestions,
          ...fetchMoreResult.fetchUseditemQuestions,
        ],
        //배열을 연결하기위해 스프레드 ....
      }),
    });
  };
  const onClickAsk = async () => {
    try {
      const result = await createUseditemQuestions({
        variables: {
          //뒤에 쿼리문이랑 일치하는지도 백번확인해야함
          createUseditemQuestionInput: {
            contents: inputs.contents,
          },
          useditemId: String(router.query.id),
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
      questions={questions}
      onClickAsk={onClickAsk}
      inputs={inputs}
      onChangeInput={onChangeInput}
      loadMore={loadMore}
    />
  );
}
