import ProductListUI from "./productList.presenter";
import { useQuery, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";

export default function ProductList() {
  return <ProductListUI />;
}
