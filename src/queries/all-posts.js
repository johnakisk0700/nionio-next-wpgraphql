import { gql } from "@apollo/client";

// only slug as it's used for ssg
export const GET_ALL_POSTS = gql`
  query {
    posts {
      nodes {
        slug
      }
    }
  }
`;
