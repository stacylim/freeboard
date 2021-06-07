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
  ReplyStar,
  ReplyContentWrapper,
  ReplyContent,
  CountingRegisterWrapper,
  ReplyCounting,
  CountingWrapper,
  ReplyRegister,
  YellowStar,
} from "./BoardComment.styles";

export default function BoardCommentUi({
  data,
  onClickRegister,
  starArr,
  saveRating,
  inputs,
  onChangeInput,
}) {
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
          onChange={onChangeInput}
          // defaultValue={defaultValues?.writer}
        />

        <ReplyPassword
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={onChangeInput}
          // defaultValue={defaultValues?.password}
        />
        {/* //언더바를 사용하면, 사용하지 않는다는 의미.  */}
        <ReplyStarsWrapper>
          {starArr.map((el, key) => {
            // el = 1 + key;

            // 2번째 별을 눌렀다면? 1 + 1 === 2
            return (
              <div key={key}>
                <ReplyStar
                  src={inputs.rating > key ? "/YellowStar.png" : "/Star.png"}
                  onClick={() => saveRating(key + 1)}
                />
              </div>
            );
          })}
          {/* {starArr.map((el, key) => {

            return <ReplyStar src="/Star.png"></ReplyStar>;
          })} */}
          {/* <ReplyStar1 src="/Star.png"></ReplyStar1>
          <ReplyStar2 src="/Star.png"></ReplyStar2>
          <ReplyStar3 src="/Star.png"></ReplyStar3>
          <ReplyStar4 src="/Star.png"></ReplyStar4>
          <ReplyStar5 src="/Star.png"></ReplyStar5> */}
        </ReplyStarsWrapper>
      </ReplyWriterPasswordWrapper>
      <ReplyContentWrapper>
        <ReplyContent
          name="contents"
          type="text"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수있으며, 이에대한 민형사상 책임은 게시자에게 있습니다."
          onChange={onChangeInput}
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
        <BoardCommentUIItem data={data} starArr={starArr}></BoardCommentUIItem>
      ))}
    </>
  );
}
