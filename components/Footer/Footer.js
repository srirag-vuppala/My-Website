import React from "react";
import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";

const Footer = (props) => {
  const socialMediaSize = 7;
  return (
    <>
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
          <Box bg="blackAlpha.300" borderRadius="100px" p={2} w="30%">
            <Flex align="center" justify="center">
              <Icon as={FiGithub} color="white" boxSize={socialMediaSize} />
              <Icon as={FiLinkedin} color="white" boxSize={socialMediaSize} />
            </Flex>
          </Box>
          <Text>Made with</Text>
          <Icon as={FiHeart} color="red" align="baseline" />
          <Text>by Srirag</Text>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
