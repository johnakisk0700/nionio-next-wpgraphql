import { gql } from "@apollo/client";

export const GET_POST = gql`
  query ($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      dateGmt
      title(format: RENDERED)
      content(format: RENDERED)
      featuredImage {
        node {
          sourceUrl
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
      seo {
        fullHead
      }
    }
  }
`;
