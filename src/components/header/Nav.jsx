import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Img,
  Show,
  Stack,
  Tag,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import ActiveLink from "./ActiveLink";
import { TriangleUpIcon } from "@chakra-ui/icons";
// in px
const logoSize = 150;

function Nav() {
  return (
    <Container maxW="4xl">
      <Grid
        gridTemplateColumns={{ base: logoSize, md: `1fr ${logoSize}px 1fr` }}
        justifyContent="center"
      >
        <Show above="md">
          <GridItem flexGrow="1">
            <Flex>
              <ActiveLink href="/category/politics/">Πολιτική</ActiveLink>
              <ActiveLink href="/category/cryptocurrency/">
                Κρυπτονομίσματα
              </ActiveLink>
            </Flex>
          </GridItem>
        </Show>
        <GridItem>
          <Link href="/">
            <Img
              src="/logo.png"
              width="100%"
              height="100%"
              transform={`translateY(-${logoSize / 2}px)`}
              cursor="pointer"
            />
          </Link>
        </GridItem>
        <Show above="md">
          <GridItem flexGrow="1">
            <Flex>
              <ActiveLink href="/category/apates/">Απάτες</ActiveLink>
              <ActiveLink href="/category/nai/">Άλλα</ActiveLink>
            </Flex>
          </GridItem>
        </Show>
      </Grid>
      <Show below="md">
        <Flex
          justifyContent="space-between"
          transform={`translateY(-${logoSize / 3}px)`}
          flexWrap="wrap"
          sx={{ span: { display: "block" } }}
        >
          <Tag variant="social">Social</Tag>
          <Tag variant="social">Social</Tag>
          <Tag variant="social">Social</Tag>
          <Tag variant="social">Social</Tag>
        </Flex>
      </Show>
    </Container>
  );
}

export default Nav;
