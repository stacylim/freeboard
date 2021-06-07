import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import Header from "../src/commons/units/header/Headers.container";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Header />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
