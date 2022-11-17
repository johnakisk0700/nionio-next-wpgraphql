import { gql } from "@apollo/client";

export const GET_FEATURED_POST = gql`
  query {
    posts(last: 1, where: { categoryName: "featured" }) {
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
