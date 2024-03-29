import React from "react";
import { Box, useColorMode } from "@chakra-ui/react";

const BorderBox = ({ children, ...props } ) => {
  const { colorMode, toggleColorMode } = useColorMode();
  function ColorChoose() {
    if (colorMode == "light") {
      return "#0a304a";
    } else {
      return "#7f5a83";
    }
  }
  return (
    <>
      <Box
        border="2px"
        my= {4}
        borderRadius="12px"
        px={[3, null, 6]}
        py={[3, null, 6]}
        borderColor={ColorChoose}
        boxShadow="inner"
        {...props}
      >
        {children}
      </Box>
    </>
  );
};

export default BorderBox;
