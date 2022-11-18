import { gql } from "@apollo/client";

export const SEARCH_POSTS = gql`
  query ($search: String) {
    posts(where: { search: $search }) {
      nodes {
        slug
        title
        content
        uri
        dateGmt
        featuredImage {
          node {
            sourceUrl
          }
        }
        excerpt(format: RENDERED)
        tags {
          nodes {
            name
            slug
          }
        }
      }
      pageInfo {
        hasNextPage
        startCursor
        endCursor
        hasPreviousPage
      }
    }
  }
`;
