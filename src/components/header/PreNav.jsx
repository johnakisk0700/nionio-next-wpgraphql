import React from "react";
import {
  Button,
  Flex,
  useColorMode,
  Show,
  Box,
  useColorModeValue,
  Container,
  Hide,
  Tag,
} from "@chakra-ui/react";
import { MdModeNight, MdLightMode } from "react-icons/md";
import BurgerMenu from "./BurgerMenu";
import SearchBar from "../SearchBar";
import { TriangleUpIcon } from "@chakra-ui/icons";

const logoSize = 150;

const PreNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("blackAlpha.200", "black");

  return (
    <Box bg={bg}>
      <Container maxW="6xl" height="64px" my="auto">
        <Flex justifyContent={"space-between"} alignItems="center" h="100%">
          <Flex alignItems="center">
            <Flex alignItems="center">
              <Hide above="md">
                <BurgerMenu />
              </Hide>
              <Hide below="md">
                <SearchBar />
              </Hide>
            </Flex>

            <Flex ml={3} display={{ base: "none", xl: "flex" }}></Flex>
          </Flex>

          <Flex alignItems="center">
            <Hide below="md">
              <Flex justifyContent="space-between" gap={2}>
                <Tag variant="social">Discord</Tag>
                <Tag variant="social">Instagram</Tag>
                <Tag variant="social">Facebook</Tag>
                <Tag variant="social">TikTok</Tag>
              </Flex>
            </Hide>
            {/* use dropdown */}
            <Button
              variant="ghost"
              onClick={toggleColorMode}
              p={1}
              borderRadius="100%"
              ml={1}
              size="sm"
            >
              {colorMode === "light" ? <MdLightMode /> : <MdModeNight />}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default PreNav;
