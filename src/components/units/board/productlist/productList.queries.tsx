import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS_OF_THE_BEST = gql`
  query fetchUseditemsOfTheBest($Useditem: Useditem!) {
    fetchUseditemsOfTheBest(Useditem: $Useditem) {
      _id
      name
      remarks
      contents
      price
      tags
    }
  }
`;
