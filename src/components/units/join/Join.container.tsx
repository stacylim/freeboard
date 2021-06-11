import JoinListUI from "./Join.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import Router from "next/router";
import { CREATE_USER } from "./Join.queries";

const inputsCreate = {
  email: "",
  name: "",
  password: "",
  passwordconfirm: "",
};

// const inputPasswordConfirm = {
//   passwordconfirm: "",
// };

const JoinList = () => {
  const router = useRouter();

  const [inputs, setInputs] = useState(inputsCreate);
  // const [passwordconfirm, setPasswordconfirm] = useState(inputPasswordConfirm);
  const [isActive, setIsActive] = useState(false);
  const [createUser] = useMutation(CREATE_USER);

  const [clickSignup, setClickSignup] = useState(false);

  const onChangeInput = (event) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);

    newInputs.password &&
    newInputs.email &&
    newInputs.name &&
    newInputs.password === newInputs.passwordconfirm
      ? setIsActive(true)
      : setIsActive(false);
  };

  console.log(isActive);

  const onClickCreate = async () => {
    clickSignup === false && setClickSignup(true);
    ///회원가입을 클릭했을시에, 만들어논 에러알럿을 보여지게 해주기 위해서는 에러알럿을 출력시켜주는 스테이트의 값을 true로 변경을 해주고
    //기본값은 false, 눌렀을때 인풋 길이의 0일때 true,

    if (isActive === false) return;

    try {
      const result = await createUser({
        variables: {
          //Arguments는 보내는데 꼭 넣어야하는 애들이다! Arguments를 클릭하여 TypeDetails 까지확인
          createUserInput: {
            email: inputs.email,
            password: inputs.password,
            name: inputs.name,
          },
          //위에서 스테이트를 통해 inputs를 설정해줬으므로, inputs를 넣어주면 그대로 인자로 들어간다. 위의 코드가 아래의 한줄로 가능
          //필수적인 인자요소의 개수와 내용을 그대로 써야만 가능.
          // createUserInput: inputs,
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
      clickSignup={clickSignup}
      inputs={inputs}
    />
  );
};

export default JoinList;
