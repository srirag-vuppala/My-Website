import React from "react";
import {
  Stack,
  useColorMode,
  Box,
  Text,
  Heading,
  Flex,
  Spacer,
  Image,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

const Banner = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  function ColorChoose() {
    if (colorMode == "light") {
      return "#0a304a";
    } else {
      return "#7f5a83";
    }
  }
  const MotionBox = motion(Box);
  return (
    <Box
      fontFamily="body"
      py={[1, null, 1.5]}
      px={[3, null, 6]}
      textAlign={["center", null, "left"]}
    >
      {/* This is the border  */}
      <MotionBox
        border="2px"
        borderRadius="12px"
        borderColor={ColorChoose}
        px={[3, null, 6]}
        py={[3, null, 6]}
        boxShadow="sm"
        animate={{ scale: [1, 1.01, 1] }}
        transition={{ duration: 1 }}
      >
        <Stack
          direction={["column", "row"]}
          spacing={["2rem", "11rem"]}
        //   justify="center"
          align={["center","space-between", "space-around"]}
          justify={["center","space-between", "space-around"]}
        >
          <Flex
            justify="space-between"
            wrap="wrap"
            grow="2"
            direction="column"
            align="space-between"
          >
            <Heading fontFamily="body" as="h3" size="xl" fontWeight="light">
              Hello, my name is
            </Heading>
            <Heading fontFamily="head" size="xl">
              {/* <Text bgGradient={gradient} bgClip="text" fontSize="6xl">Srirag Vuppala</Text> */}
              <Text color={ColorChoose} fontSize="6xl">
                Srirag Vuppala
              </Text>
            </Heading>
            <Heading fontFamily="body" as="h4" fontWeight="light">
              <Text>Developer, Leader and Tea Enthusiast</Text>
            </Heading>
          </Flex>

          <Image
            borderRadius="full"
            boxSize={["10rem", null, "20rem", "20rem"]}
            justify="center"
            alt="Srirag Vuppala"
            src="https://res.cloudinary.com/hdbw4uhvn/image/upload/v1617245054/sri_prof_jvylqr.png"
          />
        </Stack>
      </MotionBox>
    </Box>
  );
};

export default Banner;
