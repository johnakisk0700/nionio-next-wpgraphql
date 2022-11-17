import { tagAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
import { styleConsts } from "./constants";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const social = definePartsStyle({
  container: {
    cursor: "pointer",
    p: 2,
    fontSize: "2xs",
    transition: styleConsts.fastSpeed,
    _hover: {
      bg: "logo.800",
      color: "white",
    },
  },
});

const post = definePartsStyle({
  container: {
    cursor: "pointer",
    p: 1.5,
    bg: "blackAlpha.200",
    transition: styleConsts.fastSpeed,
    _hover: {
      bg: "logo.800",
      color: "white",
    },

    _dark: {
      bg: "whiteAlpha.100",
      _hover: {
        bg: "logo.800",
        color: "white",
      },
    },
  },
});

export const tagTheme = defineMultiStyleConfig({
  variants: {
    social: social,
    post: post,
  },
});
