import { gql } from "@apollo/client";

const SEARCH_POSTS = gql`
  mutation ($input: CheckoutInput!) {
    checkout(input: $input) {
      clientMutationId
      order {
        id
        orderKey
        orderNumber
        status
        refunds {
          nodes {
            amount
          }
        }
      }
      result
      redirect
    }
  }
`;

export default SEARCH_POSTS;
