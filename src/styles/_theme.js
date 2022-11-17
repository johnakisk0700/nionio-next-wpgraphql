import { extendTheme } from "@chakra-ui/react";
import { inputTheme } from "./input";
import { menuTheme } from "./menu";
import { tagTheme } from "./tag";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  nionio: {
    50: "#85baff",
    100: "#81b5f8",
    150: "#7eb0f1",
    200: "#7aabeb",
    250: "#77a6e4",
    300: "#73a1dd",
    350: "#709cd7",
    400: "#6c98d0",
    450: "#6993c9",
    500: "#658ec3",
    550: "#6289bc",
    600: "#5e85b6",
    650: "#5b80b0",
    700: "#587ba9",
    750: "#5477a3",
    800: "#51729d",
    850: "#4e6d96",
    900: "#4a6990",
    950: "#47648a",
    1000: "#446084",
  },
  logo: {
    50: "#8e8ef4",
    100: "#8b8bf3",
    150: "#8887f3",
    200: "#8584f2",
    250: "#8380f1",
    300: "#807df1",
    350: "#7d79f0",
    400: "#7a76ef",
    450: "#7772ee",
    500: "#756fed",
    550: "#726bec",
    600: "#6f68eb",
    650: "#6c64ea",
    700: "#6a60e9",
    750: "#675de8",
    800: "#6459e7",
    850: "#6255e6",
    900: "#5f52e5",
    950: "#5d4ee4",
    1000: "#5a4ae3",
  },
};

const components = {
  Menu: menuTheme,
  Input: inputTheme,
  Divider: {
    baseStyle: ({ colorMode }) => ({
      borderColor: colorMode === "dark" ? "whiteAlpha.500" : "blackAlpha.500",
    }),
  },
  Tag: tagTheme,
};

export const theme = extendTheme({ colors: colors, components: components });
