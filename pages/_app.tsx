import "../styles/globals.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createContext, useState } from "react";
//createContext 로 Context를 만들 수 있다. 리액트에서 기본제공. 로그인할때 필수. Contex란 State의 Universial 용이라고 생각하면 됨.
// import Layout from "../src/components/commons/Layout/Layout.container";
import { useRouter } from "next/router";
// import Layout from "../src/components/commons/Layout/Layout.container";
import UpperHeader from "../src/components/commons/Layout/index";
import loginListUI from "../src/components/units/login/Login.presenter";
import { createUploadLink } from "apollo-upload-client";

//로그인에 필요한사항
export const GlobalContext = createContext({
  accessToken: "",
  setAccessToken: (_: any) => {},
});
//Context 는 설정 자체가 위와 같으므로 받아들이면 됨, 그리고 아래와 같은 의미이다.
// const [accessToken, setAccessToken ] = useState("");

//GlobalContext는 çreateContext의 변수이름.

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  //로그인에 필요한 사항
  const [accessToken, setAccessToken] = useState("");
  //로그인에 필요한 사항 AccessToken을 전송하기위한 기본적인 설정
  const uploadLink = createUploadLink({
    uri: "http://backend.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${accessToken}` },
    cridential: "includes",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // uri: "http://backend.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Head></Head>
      //글로벌컨텍스트로 묶어주면, 그 안에 있는 모든 컴포넌트에서 글로벌
      컨텍스트에 선언되어 있는 값에 접근할 수 있다.
      <GlobalContext.Provider value={{ accessToken, setAccessToken }}>
        <ApolloProvider client={client}>
          {/* <div> */}
          {router.pathname !== "/login" && router.pathname !== "/sign-up" && (
            <UpperHeader />
          )}

          <Component {...pageProps} />
          {/* </div> */}
        </ApolloProvider>
      </GlobalContext.Provider>
    </>
  );
}

export default MyApp;
