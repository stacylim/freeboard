import LoginListUI from "./Login.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "@apollo/client";

const LoginList = () => {
  // . 클래스가 점,  # 아이디가 해쉬태그 html 문법

  if (typeof window !== "undefined") {
    // const _next = window.document.querySelector("#__next");
    // _next.style.height = "100%";
  }

  const router = useRouter();
  const [inputs, setInputs] = useState({
    writer: "",
    password: "",
    title: "",
    contents: "",
  });
  const [isActive, setIsActive] = useState(false);
  // const [updateBoard] = useMutation(UPDATE_BOARD);

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

  return <LoginListUI />;
};

export default LoginList;
