import {
  Box,
  Flex,
  Heading,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import React, { useMemo } from "react";
import { styleConsts } from "../../styles/constants";
import { format } from "date-fns";
import Link from "next/link";

const BigPostPreview = ({ post }) => {
  const date = useMemo(
    () => format(new Date(post.dateGmt), "dd/MM/yyyy"),
    [post]
  );
  // const bg = useColorModeValue("white", "black");
  return (
    <Box sx={styles.card}>
      <Link href={`/post/${post.slug}/`}>
        <Box
          position="relative"
          height="160px"
          width={{ base: "100%", md: "320px" }}
          minWidth="320px"
          borderRadius={styleConsts.br}
          overflow="hidden"
          boxShadow="inner"
          cursor="pointer"
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
      </Link>
      <Box ml={{ base: 0, md: 4 }} mt={{ base: 4, md: 0 }}>
        <Link href={`/post/${post.slug}/`}>
          <Heading as={"h2"} fontSize="xl" cursor="pointer">
            {post.title}
          </Heading>
        </Link>

        <Text fontSize="2xs" my={1}>
          {date}
        </Text>
        {post.tags.nodes &&
          post.tags.nodes.map((tag) => (
            <Tag mr={1} variant="post" key={tag.name}>
              {tag.name}
            </Tag>
          ))}
        <Box
          as="section"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
          noOfLines={3}
          fontStyle="italic"
          mt={1}
          fontSize="sm"
        />
      </Box>

      {/* <Box dangerouslySetInnerHTML={{ __html: post.content }} /> */}
    </Box>
  );
};

const styles = {
  card: {
    borderRadius: styleConsts.br,
    display: "flex",
    transition: styleConsts.fastSpeed,
    flexDirection: { base: "column", md: "row" },
    img: {
      transition: styleConsts.fastSpeed,
      _hover: {
        transform: "scale(1.05)",
      },
    },

    "h1, h2": {
      transition: styleConsts.fastSpeed,
      _hover: {
        color: "logo.1000",
      },
    },
  },
};

export default BigPostPreview;
