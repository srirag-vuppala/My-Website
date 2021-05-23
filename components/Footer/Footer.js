import React from "react";
import {
  Box,
  Flex,
  Wrap,
  WrapItem,
  Stack,
  Center,
  Text,
  Icon,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";
import { FaKeybase } from "react-icons/fa";

const Footer = (props) => {
  const socialMediaSize = 7;
  return (
    <>
      {/* <Box position="absolute" left="0" bottom="0" right="0"> */}
      <Box>
        {/* I want a Privacy policy */}
        {/* I want to list all the open source licenses I use */}
        <Box
          bgGradient={props.gradient}
          color="white"
          fontFamily="head"
          boxShadow="dark-lg"
          borderRadius="80% 80% 0% 0%"
          align="center"
          p={5}
          mb={-10}
        >
          <Box
            bg="blackAlpha.300"
            borderRadius="100px"
            p={2}
            w={["50%", "20%"]}
          >
            <Flex align="center" justify="center">
              <Wrap spacing="30px">
                <WrapItem>
                  <Link href="https://keybase.io/srirag" isExternal>
                    <Icon
                      as={FaKeybase}
                      color="white"
                      boxSize={socialMediaSize}
                    />
                  </Link>
                </WrapItem>
                <WrapItem>
                  <Link href="https://github.com/srirag-vuppala" isExternal>
                    <Icon
                      as={FiGithub}
                      color="white"
                      boxSize={socialMediaSize}
                    />
                  </Link>
                </WrapItem>
                <WrapItem>
                  <Link
                    href="https://www.linkedin.com/in/srirag-vuppala/"
                    isExternal
                  >
                    <Icon
                      as={FiLinkedin}
                      color="white"
                      boxSize={socialMediaSize}
                    />
                  </Link>
                </WrapItem>
              </Wrap>
            </Flex>
          </Box>
          &nbsp;
          <Stack
            align="center"
            justify="center"
            direction={["column", "column", "row", "row"]}
          >
            <Text>Made with</Text>
            <Icon as={FiHeart} color="red" align="baseline" />
            <Text>by Srirag</Text>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
