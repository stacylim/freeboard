import LoginListUI from "./Login.presenter";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "./Login.queries";

import { GlobalContext } from "../../../../pages/_app";
const LoginList = () => {
  // . 클래스가 점,  # 아이디가 해쉬태그 html 문법

  if (typeof window !== "undefined") {
    // const _next = window.document.querySelector("#__next");
    // _next.style.height = "100%";
  }
  const { setAccessToken } = useContext(GlobalContext);

  const router = useRouter();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  console.log(inputs);
  const [isActive, setIsActive] = useState(false);
  // const [updateBoard] = useMutation(UPDATE_BOARD);

  const onChangeInput = (event) => {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
    const isFullInputs = newInputs.email && newInputs.password;
    isFullInputs ? setIsActive(true) : setIsActive(false);
  };

  const [login_user] = useMutation(LOGIN_USER);

  const login = async () => {
    //result라는 변수로 accessToken을 받아오는 과장
    const result = await login_user({
      variables: {
        password: inputs.password,
        email: inputs.email,
      },
    });
    setAccessToken(result.data.loginUser.accessToken);

    alert("로그인 되었습니다.");
    router.push("/Boards/product/seller/60c9ca51d3d082002a0fed9c");
  };

  return <LoginListUI onChangeInput={onChangeInput} login={login} />;
};

export default LoginList;
