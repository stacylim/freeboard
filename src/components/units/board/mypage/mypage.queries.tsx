import { gql } from "@apollo/client";

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($search: String, $page: Int) {
    fetchUseditems(search: $search, page: $page) {
      _id
      title
      price
      name
      createdAt
    }
  }
`;

// export const FETCH_USEDITEMS_COUNT_PICKED = gql`
//   query fetchUseditemsCountIPicked( $page: Int){
//     fetchUseditemsCountIPicked(page: $page){
//   }
//   }
// `;
