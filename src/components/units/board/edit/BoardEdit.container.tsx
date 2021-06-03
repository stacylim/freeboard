import BoardEditUI from "./BoardEdit.presenter";
import { UPDATE_BOARD } from "./BoardEdit.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import Router from "next/router";

export default function updateBoard() {
  const router = useRouter();
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });
  const [isActive, setIsActive] = useState(false);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const onChangeInput = (event) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
    const isFullInputs =
      newInputs.writer &&
      newInputs.password &&
      newInputs.title &&
      newInputs.contents;
    isFullInputs ? setIsActive(true) : setIsActive(false);
  };

  const onClickEdit = async () => {
    try {
      const result = await updateBoard({
        variables: {
          //Arguments는 보내는데 꼭 넣어야하는 애들이다!
          updateBoardInput: {
            title: inputs.title,
            contents: inputs.contents,
          },
          boardId: String(router.query.id),
          password: inputs.password,
        },
      });
      const id = result.data.updateBoard._id;
      alert("게시물이 성공적으로 수정되었습니다.");
      router.push(`/Boards/${result.data.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickCancel = (event) => {
    router.push(`/Boards/${router.query.id}/edit`);
  };

  return (
    <BoardEditUI
      onChangeInput={onChangeInput}
      onClickEdit={onClickEdit}
      onClickCancel={onClickCancel}

      // defaultValues={defaultValues}
      // onChange: (true) => void; defaultValues: any;
      // defaultValues={defaultValues:any}
    />
  );
}
