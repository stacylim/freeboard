import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
// import Layout from "../src/components/commons/Layout/Layout.container";
import { useRouter } from "next/router";
// import Layout from "../src/components/commons/Layout/Layout.container";
import UpperHeader from "../src/components/commons/Layout/index";
import loginListUI from "../src/components/units/login/Login.presenter";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const client = new ApolloClient({
    uri: "http://backend.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {/* <div> */}
      {router.pathname !== "/login" || ("/sign-up" && <UpperHeader />)}

      <Component {...pageProps} />
      {/* </div> */}
    </ApolloProvider>
  );
}

export default MyApp;
