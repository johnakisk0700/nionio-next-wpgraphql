import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { GiHammerSickle } from "react-icons/gi";

const Logo = () => {
  return (
    <Link href="/">
      <a className="">
        <Flex alignItems="center">
          <GiHammerSickle size="24px" />
          <Box fontWeight="black">
            <Text sx={gtp}>KKE</Text>
            NIONIO
            <Text as="span" position="relative" fontSize="xs" top="-5px">
              ™
            </Text>
          </Box>
        </Flex>
      </a>
    </Link>
  );
};

const gtp = {
  color: "red.500",
  fontSize: "0.425rem",
  height: "0.225rem",
};

export default Logo;
