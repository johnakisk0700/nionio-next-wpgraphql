import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { SEARCH_POSTS } from "../../src/queries/search-posts";
import { Box, Divider, Heading, Progress, Stack, Text } from "@chakra-ui/react";
import SearchBar from "../../src/components/SearchBar";
import BigPostPreview from "../../src/components/posts/BigPostPreview";
import { styleConsts } from "../../src/styles/constants";

function SearchPage() {
  const { query, params } = useRouter();
  const { loading, error, data, refetch } = useQuery(SEARCH_POSTS, {
    variables: { search: query.search },
  });

  useEffect(() => {
    // if there's something search, if empty do nothing.
    if (query.search) {
      refetch({ search: query.search });
    }
  }, [query]);

  if (loading)
    return (
      <>
        <SearchBar variant="page" />
        <Progress colorScheme="logo" size="xs" isIndeterminate />
      </>
    );

  const posts = data?.posts?.nodes;
  console.log(data.posts?.pageInfo);
  return (
    <div>
      <SearchBar variant="page" />
      {query.search && posts.length ? (
        <Heading mt={6} mb={8} fontSize="md">
          <Text as="span" fontWeight={400} fontStyle="italic" mr={1}>
            Βλέπετε αποτελέσματα για:
          </Text>
          {query.search}
        </Heading>
      ) : null}
      <Stack gap={4}>
        {posts.length &&
          posts.map((post) => (
            <React.Fragment key={post.slug}>
              <BigPostPreview post={post} />
              <Divider />
            </React.Fragment>
          ))}
        {!posts.length ? (
          <Text textAlign="center" mt={4}>
            Δε βρέθηκαν αποτελέσματα.
          </Text>
        ) : null}
      </Stack>
    </div>
  );
}

export default SearchPage;
