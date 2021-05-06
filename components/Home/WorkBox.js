import React from "react";
import {
  Center,
  Box,
  Heading,
  Text,
  Divider,
  Spacer,
  Stack,
  HStack,
  useColorMode,
  useToken,
  Tag,
  TagLeftIcon,
  TagLabel,
  Image,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FcCalendar } from "react-icons/fc";

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
  const [st, ed] = useToken("colors", ["g_start", "g_end"]);
  const [red100, blue200] = useToken(
    // the key within the theme, in this case `theme.colors`
    "colors",
    // the subkey(s), resolving to `theme.colors.red.100`
    ["red.100", "blue.200"]
    // a single fallback or fallback array matching the length of the previous arg
  );

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
        borderRadius="20px"
        px={[4, null, 7.5]}
        py={[3, null, 6]}
        borderColor={ColorChoose}
        // boxShadow={`inset -4px 5px 0 ${ed}, 0 0 2px ${st}`}
        boxShadow="xl"
      >
        <Stack direction={["column", "column", "row", "row"]} align="center">
          <Box>
            <Stack
              direction={["column", "column", "row", "row"]}
              align="center"
            >
              <Link href={companyURL} isExternal>
                <HStack align="center" justify="center">
                  <Heading
                    fontSize="2em"
                    fontFamily="body"
                    color={ColorChoose}
                  >
                    {company}
                  </Heading>
                  <ExternalLinkIcon mx="2px" />
                </HStack>
              </Link>
            </Stack>
            <HStack>
              <Heading fontSize={["lg", null]}> {position}</Heading>
              <Spacer />
              <Tag varient="outline" >
                <TagLeftIcon as={FcCalendar} />
                <TagLabel
                  fontWeight="light"
                  as="em"
                  align="right"
                  fontSize="sm"
                >
                  {startDate} to {endDate}
                </TagLabel>
              </Tag>
            </HStack>
            &nbsp;
            <Text>{description}</Text>
            {techStack.map((tech, i) => {
              return <Tag key={i}>{tech}</Tag>;
            })}
          </Box>
          <Spacer />
          <Image boxSize="8em" src={companyLogo} />
        </Stack>
      </Box>
    </>
  );
};

export default WorkBox;
