import React from "react";
import {
  Center,
  Box,
  Heading,
  Text,
  Divider,
  HStack,
  useColorMode,
  Tag,
  Image,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons';

const WorkBox = ({
  company,
  position,
  companyLogo,
  companyURL,
  startDate,
  endDate,
  description,
  techStack,
}) => {
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
        my={4}
        borderRadius="12px"
        px={[3, null, 6]}
        py={[3, null, 6]}
        borderColor={ColorChoose}
        boxShadow="lg"
      >
        <Link href={companyURL} isExternal>
          <HStack>
            <Image boxSize="50px" src={companyLogo} borderRadius="full" />
            <Heading fontFamily="body">{company}</Heading>
            <ExternalLinkIcon mx="2px" />
          </HStack>
        </Link>
        &nbsp;
        <Text>{position}</Text>
        <Text>{description}</Text>
        {techStack.map((tech, i) => {
          return <Tag>{tech}</Tag>;
        })}
      </Box>
    </>
  );
};

export default WorkBox;
