import { Divider, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import client from "../../src/ApolloClient";
import BigPostPreview from "../../src/components/posts/BigPostPreview";
import { GET_CATEGORIES } from "../../src/queries/categories";
import { GET_POSTS_BY_CATEGORY } from "../../src/queries/posts-by-category";

function Category({ categoryName, posts }) {
  return (
    <>
      <Heading as="h1" mb={8}>
        {categoryName}
      </Heading>
      <Stack gap={4}>
        {posts.map((post) => (
          <>
            <BigPostPreview post={post} />
            <Divider />
          </>
        ))}
      </Stack>
    </>
  );
}

export default Category;

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const { data } = await client.query({
    query: GET_POSTS_BY_CATEGORY,
    variables: { slug, slugAsID: slug },
  });

  return {
    props: {
      categoryName: data?.category?.name,
      posts: data?.posts?.nodes ?? [],
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_CATEGORIES,
  });
  const pathsData = [];

  data?.categories?.nodes &&
    data?.categories?.nodes.map((category) => {
      pathsData.push({
        params: { slug: category.slug },
      });
    });

  return {
    paths: pathsData,
    fallback: true,
  };
}
