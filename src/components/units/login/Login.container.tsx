import LoginListUI from "./Login.presenter";

const LoginList = () => {
  // . 클래스가 점,  # 아이디가 해쉬태그 html 문법
  if (typeof window !== "undefined") {
    // const _next = window.document.querySelector("#__next");
    // _next.style.height = "100%";
  }
  return <LoginListUI />;
};

export default LoginList;
