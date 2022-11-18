import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useMemo } from "react";
import client from "../../src/ApolloClient";
import { GET_ALL_POSTS } from "../../src/queries/all-posts";
import { GET_POST } from "../../src/queries/post";
import { styleConsts } from "../../src/styles/constants";
import Head from "next/head";
import parse from "html-react-parser";

function Post({ post }) {
  const SEO = useMemo(() => {
    return parse(post.seo.fullHead);
  }, [post.seo.fullHead]);

  return (
    <>
      <Head>{SEO}</Head>
      <Box position="relative" height="400px" borderRadius={styleConsts.br}>
        <Image
          src={
            post.featuredImage?.node?.sourceUrl ??
            "http://wp.nionio.gr/wp-content/uploads/2022/11/logo.png"
          }
          layout="fill"
          objectFit="cover"
        />
      </Box>
      <Heading as="h1" fontSize="3xl">
        {post.title}
      </Heading>
      <Text fontSize="2xs">{post.dateGmt}</Text>
      <Box dangerouslySetInnerHTML={{ __html: post.content }}></Box>
    </>
  );
}

export default Post;

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const { data } = await client.query({
    query: GET_POST,
    variables: { slug },
  });

  return {
    props: {
      post: data.post,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_ALL_POSTS,
  });
  const pathsData = [];

  data?.posts?.nodes &&
    data?.posts?.nodes.map((category) => {
      pathsData.push({
        params: { slug: category.slug },
      });
    });

  return {
    paths: pathsData,
    fallback: "blocking",
  };
}
