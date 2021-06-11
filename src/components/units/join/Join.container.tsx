import JoinListUI from "./Join.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import Router from "next/router";
import { CREATE_USER } from "./Join.queries";

const inputsCreate = {
  _id: "",
  email: "",
  name: "",
};

const JoinList = () => {
  const router = useRouter();

  const [inputs, setInputs] = useState(inputsCreate);
  const [isActive, setIsActive] = useState(false);
  const [createUser] = useMutation(CREATE_USER);

  const onChangeInput = (event) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);

    const isFullInputs =
      newInputs._id && newInputs.email && newInputs.name && isFullInputs
        ? setIsActive(true)
        : setIsActive(false);
  };

  const onClickCreate = async () => {
    try {
      const result = await createUser({
        variables: {
          //Arguments는 보내는데 꼭 넣어야하는 애들이다!
          createUserInput: {
            _id: inputs._id,
            email: inputs.email,
            name: inputs.name,
          },
        },
      });
      const id = result.data.createUser._id;
      alert("회원가입이 완료되었습니다.");
      // router.push(`/Boards/${result.data.createUser._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <JoinListUI
      isActive={isActive}
      onChangeInput={onChangeInput}
      onClickCreate={onClickCreate}
    />
  );
};

export default JoinList;
