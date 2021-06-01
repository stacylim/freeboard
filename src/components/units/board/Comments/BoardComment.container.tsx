import BoardCommentUI from "./BoardComment.presenter"
import { FETCH_BOARD_COMMENT } from "./BoardComment.queries";
import { useRouter } from "next/router";
import { fallbackHttpConfig, useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./BoardComment.queries";
import { useState } from "react";
import { UPDATE_BOARD_COMMENT } from "./BoardComment.queries";
import { DELETE_BOARD_COMMENT } from "./BoardComment.queries";

const inputsInit = { //요청하는 정보를 넣는 곳이므로 argument, typedetails에서만 가능
  
    writer: "",
    password: "",
    contents: "",
    rating: 0,
  };

const inputupdateInit = {
  writer: "",
  password: "",
  title: "",
  contents: "",

};
export default function BoardComment(){

    const [inputs, setInputs] = useState(inputsInit); 
    const router = useRouter()
    const { data } = useQuery(FETCH_BOARD_COMMENT, {
        variables: {boardId: String(router.query.id) }
    })

    console.log(data, "ㅁㄴㅇ")
    const [ createBoardComment ] = useMutation(CREATE_BOARD_COMMENT);
    
    const [updateInit, setUpdateInit ] = useState(inputupdateInit);
     
    const [isEdit, setIsEdit] = useState(false) //댓글수정버튼 입력시 화면 전환 조건부랜더링
        const [ deleteBoardComment ] = useMutation(DELETE_BOARD_COMMENT);

    
    const { } = useMutation(UPDATE_BOARD_COMMENT, { 
      variables: {
        boardCommentId: String(router.query.id)}
    })
        

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

             boardId: String(router.query.id)
          },
          //아폴로독스설명서를 봐야함
          refetchQueries: [{query: FETCH_BOARD_COMMENT, variables: {boardId: String(router.query.id) } }]
        });
       
        alert("댓글이 성공적으로 등록되었습니다.");
  
                
      } catch (error) {
        alert(error.message);
      }
    };

   //댓글수정연필버튼 눌렀을때 상태변경 
    const onClickEdit = () => {
      setIsEdit(true)
    }

    //수정후 수정버튼 눌렀을때 
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

