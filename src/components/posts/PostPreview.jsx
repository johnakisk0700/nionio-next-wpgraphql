import { Box, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import React, { useMemo } from "react";
import { styleConsts } from "../../styles/constants";
import { format } from "date-fns";
import Link from "next/link";

/**
 * This is supposed to be a big preview if "featured" is true,
 * otherwise it tries to stretch itself in its container
 */

const PostPreview = ({ post, featured }) => {
  const date = useMemo(
    () => format(new Date(post.dateGmt), "dd/MM/yyyy"),
    [post]
  );
  // const bg = useColorModeValue("white", "black");
  return (
    <Link href={`/post/${post.slug}/`}>
      <Box sx={styles.card}>
        <Box
          position="relative"
          height={featured ? "420px" : "auto"}
          maxHeight={!featured && "60%"}
          flexGrow={1}
          borderRadius={styleConsts.br}
          overflow="hidden"
          boxShadow="inner"
        >
          <Image
            src={
              post.featuredImage?.node?.sourceUrl ??
              "http://nionio.gr/wp-content/uploads/2022/05/cropped-Nionio-logos_transparent.png"
            }
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Text fontSize="2xs" my={1}>
          {date}
        </Text>
        <Heading
          as={featured ? "h1" : "h2"}
          fontSize={featured ? "md" : "sm"}
          noOfLines={2}
        >
          {post.title}
        </Heading>
        <Box
          as="section"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
          noOfLines={2}
          fontStyle="italic"
          mt={1}
          fontSize="sm"
        />
      </Box>
    </Link>
  );
};

const styles = {
  card: {
    p: 2,
    borderRadius: styleConsts.br,
    display: "flex",
    flexDirection: "column",
    flexBasis: "33%",
    flexGrow: 1,
    cursor: "pointer",
    transition: styleConsts.fastSpeed,
    "h1, h2": {
      transition: styleConsts.fastSpeed,
    },
    img: {
      transition: styleConsts.fastSpeed,
    },
    _hover: {
      bg: "blackAlpha.50",
      "h1, h2": { color: "logo.1000" },
      img: {
        transform: "scale(1.05)",
      },
      _dark: {
        bg: "whiteAlpha.50",
      },
    },
  },
};

export default PostPreview;
