import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { styleConsts } from "./constants";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  // // define the part you're going to style
  field: {
    py: 3,
    background: "white",
    _dark: { background: "gray.600" },
    _disabled: {
      opacity: 1,
      background: "blackAlpha.50",
      color: "gray.600",
      _dark: {
        background: "gray.900",
      },
    },
    _invalid: {
      border: "2px solid",
      borderColor: "red.400",
    },
  },
  addon: {
    background: "white",
    _dark: { background: "gray.600" },
  },
  element: {
    py: 3,
    borderRadius: styleConsts.br,
  },
});

export const inputTheme = defineMultiStyleConfig({
  baseStyle,
  defaultProps: {
    variant: null,
  },
});
