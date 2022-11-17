import { Box, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import Nav from "./header/Nav";
import PreNav from "./header/PreNav";

const Header = () => {
  return (
    <Box as="nav">
      <PreNav />
      <Nav />
    </Box>
  );
};

export default Header;
