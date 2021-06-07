import BoardDetailUI from "./BoardDetail.presenter";
import { FETCH_BOARD } from "./BoardDetail.queries";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import BoardComment from "../Comments/BoardComment.container";
export default function BoardDetail() {
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  const onClickEdit = () => {
    router.push(`/Boards/${router.query.id}/edit`);
  };

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: String(router.query.id) },
  });

  const onClickLike = () => {
    12354;
  };

  return (
    <>
      <BoardDetailUI
        data={data}
        isActive={isActive}
        onClickEdit={onClickEdit}
        onClickLike={onClickLike}
      />
      <BoardComment />
    </>
  );
}
