import ProductEditUI from "./Productedit.presenter";
import { useQuery, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";

export default function ProductEdit() {
  return <ProductEditUI />;
}
