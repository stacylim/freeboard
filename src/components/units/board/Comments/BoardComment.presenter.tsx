import { useState } from "react";
import BoardCommentUIItem from "./BoardComment.presenterItem";
import {
  ReplyWholeWrapper,
  ReplyUpperWrapper,
  ReplyImageWrapper,
  ReplyImage,
  Reply,
  ReplyWriterPasswordWrapper,
  ReplyWriter,
  ReplyPassword,
  ReplyStarsWrapper,
  ReplyStar1,
  ReplyStar2,
  ReplyStar3,
  ReplyStar4,
  ReplyStar5,
  ReplyContentWrapper,
  ReplyContent,
  CountingRegisterWrapper,
  ReplyCounting,
  CountingWrapper,
  ReplyRegister,
} from "./BoardComment.styles";

export default function BoardCommentUi({ data, onClickRegister }) {
  return (
    <>
      <ReplyImageWrapper>
        <ReplyImage src="/ReplyLike.png"></ReplyImage>
        <Reply>댓글</Reply>
      </ReplyImageWrapper>
      <ReplyWriterPasswordWrapper>
        <ReplyWriter
          name="writer"
          type="text"
          placeholder="작성자"
          // onChange={onChangeInput}
          // defaultValue={defaultValues?.writer}
        />

        <ReplyPassword
          name="password"
          type="password"
          placeholder="비밀번호"
          // onChange={onChangeInput}
          // defaultValue={defaultValues?.password}
        />
        <ReplyStarsWrapper>
          <ReplyStar1 src="/Star.png"></ReplyStar1>
          <ReplyStar2 src="/Star.png"></ReplyStar2>
          <ReplyStar3 src="/Star.png"></ReplyStar3>
          <ReplyStar4 src="/Star.png"></ReplyStar4>
          <ReplyStar5 src="/Star.png"></ReplyStar5>
        </ReplyStarsWrapper>
      </ReplyWriterPasswordWrapper>
      <ReplyContentWrapper>
        <ReplyContent
          name="content"
          type="text"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수있으며, 이에대한 민형사상 책임은 게시자에게 있습니다."
          // onChange={onChangeInput}
          // defaultValue={defaultValues?.content}
        />
      </ReplyContentWrapper>
      <CountingRegisterWrapper>
        <CountingWrapper>
          <ReplyCounting>0/100</ReplyCounting>
        </CountingWrapper>
        <ReplyRegister onClick={onClickRegister}>등록하기</ReplyRegister>
      </CountingRegisterWrapper>
      {data?.fetchBoardComments?.map((data) => (
        <BoardCommentUIItem data={data}></BoardCommentUIItem>
      ))}
    </>
  );
}
