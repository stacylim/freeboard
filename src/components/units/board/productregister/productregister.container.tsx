import ProductRegisterUI from "./Productregister.presenter";
import { useQuery, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";

export default function ProductRegister() {
  return <ProductRegisterUI />;
}
