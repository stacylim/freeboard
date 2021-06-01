import { useState } from "react";
import BoardCommentUI from "./BoardComment.presenter"
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./BoardComment.queries";
import { UPDATE_BOARD_COMMENT } from "./BoardComment.queries";
import { DELETE_BOARD_COMMENT } from "./BoardComment.queries";

//  const onClickUpdate = async () => {
    
//       const result = await updateBoardComment({ //Arguments에서 꼭 보내야하는 애들 
//         variables: {
//           updateBoardCommentInput: {
//           password: inputs.password,
//           boardCommentId: inputs.writer 
//           }
//         }
//       })
//     }
       

//     } catch(error){

//     }
  

const onClickDelete = async (event) => {
    try {
      console.log(event.target.id)
      const result = await deleteBoardComment({ //Arguments에서 꼭 보내야하는 애들 
        variables: {
          password: "",
          boardCommentId: event.target.id, 
        },
      

        refetchQueries: [{query: FETCH_BOARD_COMMENT, variables:{boardId: String(router.query.id)}} ]
      })
  }catch(error) {
      alert(error.message);
    }
  }

return (
<BoardCommentUI 
data={data}
onClickRegister={onClickRegister}
isEdit={isEdit}
onClickEdit={onClickEdit}
// onClickUpdate={onClickUpdate}
onClickDelete={onClickDelete}
/>
);

}

import {

    ReplyBox1,
    Box1Content,
    ProfileWrapper,
    Profile,
    Box1InnerWrapper,
    InnerCenterWrapper,
    WriterStarWrapper,
    WriterWrapper,
    Writer,
    StarsWrapper2,
    YellowStar,
    Star,
    Date,
    RightWrapper,
    EditIMG,
    DeleteIMG,
    EditReplyWriterPasswordWrapper,
    EditReplyWriter,
    EditReplyPassword,
    EditReplyStarsWrapper,
    EditReplyContentWrapper,
    EditReplyContent,
    EditCountingRegisterWrapper,   
    EditCountingWrapper,
    EditReplyRegister,
    EditReplyCounting,
  } from "./BoardComment.styles";

{isEdit && 
    <>
        <EditReplyWriterPasswordWrapper>
            <EditReplyWriter
            // name="writer"
            type="text"
            placeholder={data.writer}
            // onChange={onChangeInput}
            // defaultValue={defaultValues?.writer}
            />
            
            <EditReplyPassword
            // name="password"
            type="password"
            placeholder={data.password}
            // onChange={onChangeInput}
            // defaultValue={defaultValues?.password}
                 
            />
            
            <EditReplyStarsWrapper>
            <YellowStar src="/YellowStar.png"></YellowStar>
            <YellowStar src="/YellowStar.png"></YellowStar>
            <YellowStar src="/YellowStar.png"></YellowStar>
            <Star src="/Star.png"></Star>                   
            <Star src="/Star.png"></Star>
                </EditReplyStarsWrapper>
            
            </EditReplyWriterPasswordWrapper>
            <EditReplyContentWrapper>
            <EditReplyContent
                name="content"
                type="text"
                placeholder="진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보 부탁드립니다~!."
                // onChange={onChangeInput}
                // defaultValue={defaultValues?.content}
                />
        
        </EditReplyContentWrapper>
        <EditCountingRegisterWrapper>
            <EditCountingWrapper>
            <EditReplyCounting>0/100</EditReplyCounting>
            </EditCountingWrapper>
            <EditReplyRegister onClick={onClickUpdate}>수정하기</EditReplyRegister>
        </EditCountingRegisterWrapper>
    </>
}
//조건부렌더링
 {!isEdit && <ReplyBox1>
           <ProfileWrapper>
               <Profile src="/Profilephoto.png"></Profile>
               <Box1InnerWrapper>
                   <InnerCenterWrapper>
                       <WriterStarWrapper>
                           <WriterWrapper>
                           <Writer>{data.writer}</Writer>
                           <StarsWrapper2>
                               <YellowStar src="/YellowStar.png"></YellowStar>
                               <YellowStar src="/YellowStar.png"></YellowStar>
                               <YellowStar src="/YellowStar.png"></YellowStar>
                               <Star src="/Star.png"></Star>                   
                               <Star src="/Star.png"></Star>
                           </StarsWrapper2>
                           </WriterWrapper>
                       </WriterStarWrapper>
               
                   <Box1Content>{data.contents}</Box1Content>
                   <Date>{data.createdAt}</Date>
               </InnerCenterWrapper>
               <RightWrapper>
                   <EditIMG id={data._id}src="/EditImg.png" onClick={onClickEdit}></EditIMG>
                   <DeleteIMG id={data._id} src="/DeleteImg.png" onClick={onClickDelete}></DeleteIMG>
       
               </RightWrapper>
       </Box1InnerWrapper>
       </ProfileWrapper>
       </ReplyBox1>}
   {/* 수정은 스테이트로 관리, 스테이트가 트루면, 수정화면 보이게 하고 false면, 지금화면 그대로 
 //새로운 화면이 나오게끔! */}
</>

