import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query {
    categories {
      nodes {
        id
        name
        slug
      }
    }
  }
`;
