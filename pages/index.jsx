import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import client from "../src/ApolloClient";
import PostPreview from "../src/components/posts/PostPreview";
import { GET_FEATURED_POST } from "../src/queries/featured-post";
import { GET_LATEST_POSTS } from "../src/queries/posts";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { styleConsts } from "../src/styles/constants";
import { GET_POSTS_BY_CATEGORY } from "../src/queries/posts-by-category";
import { featuredCategoriesArr } from "../NionioControl";
import React from "react";

export default function IndexPage(props) {
  const { posts, featuredPost, featuredCategories } = props;
  return (
    <Box>
      <Heading textAlign="right" fontSize="md" mb={4}>
        Τελευταία Post
      </Heading>
      <Grid gridTemplateColumns={{ base: "1fr", md: "70% 1fr" }} gap={6}>
        <GridItem flexGrow={1}>
          <PostPreview post={featuredPost} featured />
        </GridItem>
        <GridItem
          display="flex"
          flexDirection={{ base: "row", md: "column" }}
          height={{ base: "148px", md: "auto" }}
          gap={3}
        >
          {posts.slice(0, 3).map((post) => (
            <PostPreview post={post} key={post.title} />
          ))}
        </GridItem>
      </Grid>

      <Divider my={styleConsts.sectionMargin} />

      {featuredCategories.map((featuredCat) => (
        <React.Fragment key={featuredCat.name}>
          <Heading fontSize="xl">{featuredCat.name}</Heading>
          <Swiper
            spaceBetween={24}
            slidesPerView={2}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            style={{ height: "320px", paddingTop: 24, paddingBottom: 24 }}
          >
            {featuredCat.posts.map((post) => (
              <SwiperSlide key={post.title} style={{ display: "flex" }}>
                <PostPreview post={post} />
              </SwiperSlide>
            ))}
            <SwiperSlide
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                flexDirection: "column",
              }}
            >
              Δείτε περισσότερα νέα γιά:
              <Link href={"/"}>{featuredCat.name}</Link>
            </SwiperSlide>
          </Swiper>
          <Divider my={styleConsts.sectionMargin} />
        </React.Fragment>
      ))}
    </Box>
  );
}

export async function getStaticProps() {
  const { data: postsData } = await client.query({
    query: GET_LATEST_POSTS,
  });

  const { data: featuredPost } = await client.query({
    query: GET_FEATURED_POST,
  });

  const featuredCategoriesRes = await getFeaturedCategories(
    featuredCategoriesArr
  );

  return {
    props: {
      posts: postsData.posts.nodes,
      featuredPost: featuredPost.posts.nodes[0],
      featuredCategories: featuredCategoriesRes,
    },
    revalidate: 1,
  };
}

const getFeaturedCategories = async (featuredCategories) => {
  let res = [];
  for (let category of featuredCategories) {
    const { data } = await client.query({
      query: GET_POSTS_BY_CATEGORY,
      variables: { slug: category, slugAsID: category },
    });
    res.push({ posts: data.posts.nodes, name: data.category.name });
  }
  return res;
};
