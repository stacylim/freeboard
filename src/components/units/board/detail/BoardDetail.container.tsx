import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD, BOARD_LIKE, BOARD_DISLIKE } from "./BoardDetail.queries";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import BoardComment from "../Comments/BoardComment.container";
export default function BoardDetail() {
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  const onClickEdit = () => {
    router.push(`/Boards/${router.query.id}/edit`);
  };
  //리패치를 실행을 하면 useQuery가 다시 실행, 리페치를 걸어주는 부분이

  const { data, refetch } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.id) },
  });

  const [boardLike] = useMutation(BOARD_LIKE);
  const [boardDislike] = useMutation(BOARD_DISLIKE);

  const onClickLike = async () => {
    console.log(router.query.id);
    try {
      await boardLike({
        //roter.query.id 실제로 변하는 아이디를 가져오는 방법
        variables: { boardId: router.query.id },
      });
      refetch();
      // alert("게시물이 성공적으로 등록되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickDislike = async () => {
    console.log(router.query.id);
    try {
      await boardDislike({
        //roter.query.id 실제로 변하는 아이디를 가져오는 방법
        variables: { boardId: router.query.id },
      });
      refetch();
      // alert("게시물이 성공적으로 등록되었습니다.");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <BoardDetailUI
        data={data}
        isActive={isActive}
        onClickEdit={onClickEdit}
        onClickLike={onClickLike}
        onClickDislike={onClickDislike}
      />
      <BoardComment />
    </>
  );
}
