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
  List,
  ListItem,
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
        <Stack p={5} direction={["column", "column", "row", "row"]} align="center">
          <Box>
            <Stack
              direction={["column", "column", "row", "row"]}
              align="center"
            >
              <Link href={companyURL} isExternal>
                <Stack direction={["column", "column", "row", "row"]} align="center" justify="center">
                  <Heading fontSize={["1.5em", null]}> {position}</Heading>
                  <Heading fontSize={["1.5em"]}>at</Heading>
                  <Heading
                    fontSize="1.5em"
                    fontFamily="body"
                    color={ColorChoose}
                  >
                    {company}
                  </Heading>
                  <ExternalLinkIcon mx="2px" />
                </Stack>
              </Link>
            </Stack>
            <Spacer />
            <Tag varient="outline" mt={3} >
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

            <List styleType="disc"  p={5}>
              {description.map((point, i) => {
                return <ListItem  key={i} mt={1}>{point}</ListItem>
              })}
            </List>

            {techStack.map((tech, i) => {
              return <Tag mx={1} key={i}>{tech}</Tag>;
            })}
          </Box>
          <Spacer />
          <Image boxSize="8em" src={companyLogo} borderRadius="1em" />
        </Stack>
      </Box>
    </>
  );
};

export default WorkBox;
