import ProductBuyerUI from "./Productbuyer.presenter";
import { useQuery, useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";

export default function ProductBuyer() {
  return <ProductBuyerUI />;
}
