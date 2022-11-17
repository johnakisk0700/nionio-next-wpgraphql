import { PhoneIcon } from "@chakra-ui/icons";
import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";
import Logo from "./header/Logo";

const Footer = () => {
  const bg = useColorModeValue("white", "gray.900");

  return (
    <Box as="footer" bg={bg} width="100%" height="64px" mt={12} py={4}>
      <Container
        maxW="6xl"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box>
          <Logo />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
