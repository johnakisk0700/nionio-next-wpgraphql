import { gql } from "@apollo/client";

// we exclude category 1 (featured) from this
export const GET_LATEST_POSTS = gql`
  query {
    posts(last: 4, where: { categoryNotIn: 1 }) {
      nodes {
        slug
        title
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
    }
  }
`;
