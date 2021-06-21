import React, { useState } from "react";
import ProductCommentUIItem from "./ProductComment.presenterItem";
import InfiniteScroll from "react-infinite-scroller";
// import BoardCommentUIItem from "./BoardComment.presenterItem";
import {
  ReplyWholeWrapper,
  ReplyImageWrapper,
  ReplyImage,
  Reply,
  Ask,
  ReplyContentWrapper,
  ReplyContent,
  CountingRegisterWrapper,
  ReplyCounting,
  CountingWrapper,
} from "./ProductComment.styles";

export default function ProductCommentUI({
  data,
  onClickAsk,

  inputs,
  onChangeInput,
}) {
  return (
    <>
      <ReplyWholeWrapper>
        <ReplyImageWrapper>
          <ReplyImage src="/ReplyLike.png"></ReplyImage>
          <Reply>문의하기</Reply>
        </ReplyImageWrapper>

        <ReplyContentWrapper>
          <ReplyContent
            name="contents"
            type="text"
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수있으며, 이에대한 민형사상 책임은 게시자에게 있습니다."
            // onChange={onChangeInput}
            // defaultValue={defaultValues?.content}
          />
        </ReplyContentWrapper>
        <CountingRegisterWrapper>
          <CountingWrapper>
            <ReplyCounting>0/100</ReplyCounting>
            <Ask onClick={onClickAsk}>문의하기</Ask>
          </CountingWrapper>
          {/* <ReplyRegister onClick={onClickRegister}>등록하기</ReplyRegister> */}
        </CountingRegisterWrapper>

        {data?.createUseditemQuestion?.map((data) => {
          <ProductCommentUIItem data={data}></ProductCommentUIItem>;
        })}
      </ReplyWholeWrapper>
    </>
  );
}
