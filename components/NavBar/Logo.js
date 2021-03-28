import React from "react";
import { Box, Text, Circle } from "@chakra-ui/react";

const Logo = (props) => {
  return (
    <Circle {...props} >
      <Text  fontWeight="bold" bgGradient="linear(to-l, #7928CA,#FF0080)" bgClip="text">
        S.V
      </Text>
    </Circle>
  );
};

export default Logo;
