import { gql } from "@apollo/client";

export const GET_POSTS_BY_CATEGORY = gql`
  query ($slug: String, $slugAsID: ID!) {
    posts(last: 10, where: { categoryName: $slug }) {
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
    }
    category(id: $slugAsID, idType: SLUG) {
      name
    }
  }
`;
