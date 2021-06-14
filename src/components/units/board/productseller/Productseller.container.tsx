import ProductSellerUI from "./Productseller.presenter";
import { useQuery, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";

export default function ProductSeller() {
  return <ProductSellerUI />;
}
