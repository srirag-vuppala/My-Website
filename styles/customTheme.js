import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    head: "Alata",
    body: "Roboto",
  },
  colors: {
    g_start: "#0d324d",
    g_end: "#7f5a83",
    gt_start: "#071c2b",
    gt_end: "#d597db",

  },
});

export default customTheme;
