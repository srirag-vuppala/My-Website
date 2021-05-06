import React from 'react'
import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";

const WorkBox = ({company, position, startDate, endDate, description, }) => {
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
        my= {4}
        borderRadius="12px"
        px={[3, null, 6]}
        py={[3, null, 6]}
        borderColor={ColorChoose}
        boxShadow="lg"
      >
          <Heading>{company}</Heading>
          <Text>{position}</Text>
          <Text>{description}</Text>
      </Box>
    </>
  );
}

export default WorkBox