import { gql } from "@apollo/client";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemid: ID!) {
    fetchUseditem(useditemid: $useditemid) {
      _id
      name
      remarks
      contents
      price
      tags
      useditemAddress
      buyer
      seller
      soldAt
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
