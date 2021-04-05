import React from "react";
import NextLink from "next/link";
import {
  Box,
  Text,
  Header,
  Link,
  ListItem,
  UnorderedList,
  Badge,
} from "@chakra-ui/react";

const CatContainer = ({ categories }) => {
  return (
    <>
      <Box>
        <Text>
          Click on any one of these badges to find any related blog posts /
          Projects I've made.
        </Text>
        <br />
        <Box>
          {categories.map((category) => {
            return (
              <Badge variant="solid" rounded="full" px={2} key={category.id} bg="red">
                <NextLink
                  as={`/category/${category.slug}`}
                  href="/category/[id]"
                >
                  <Link>{category.name}</Link>
                </NextLink>
              </Badge>
            );
          })}
        </Box>
        <br />
      </Box>
    </>
  );
};

export default CatContainer;
