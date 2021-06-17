import { gql } from "@apollo/client";

export const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
    }
  }
`;

export const USEDITEM_LIKE = gql`
  query fetchUseditemsIPicked($Useditem: Useditem!) {
    # 첫째줄에 boardID는 인자값, ID!는 타입
    fetchUseditemsIPicked(Useditem: $Useditem)
    #둘째줄의 boardID는 인자이름, $는 앞에 설정했떤 인자의타입값.
  }
`;
