import React from "react";
import NextLink from "next/link";
import {
  Box,
  Flex,
  Spacer,
  SimpleGrid,
  Text,
  Heading,
  Link,
  ListItem,
  UnorderedList,
  Badge,
  Tag,
} from "@chakra-ui/react";
import BorderBox from "@/components/BorderBox";

const BlogBanner = ({ categories, ...props }) => {
  // a blogbanner shouldn't make sense we should just have a universal search anything
  return (
    <>
      <Box {...props}>
        <BorderBox>
          <Heading align="center" fontFamily="head">
            Click to find any related blog posts.
          </Heading>
          <br />
          <Box>
            {console.log(categories)}
            <Flex justify="center" align="center" flexWrap="wrap">
              {categories.map((category) => {
                const Navgradient = "repeating-linear(to-l, g_start, g_end)";
                return (
                  <Tag
                    variant="outline"
                    px={3}
                    py={2}
                    mx={2}
                    my={2}
                    size="md"
                    key={category.id}
                    bg="g_start"
                    color="white"
                  >
                    <NextLink
                      as={`/category/${category.slug}`}
                      href="/category/[id]"
                    >
                      <Link>
                        {category.name} | {category.articles.length}
                      </Link>
                    </NextLink>
                  </Tag>
                );
              })}
            </Flex>
          </Box>
        </BorderBox>
      </Box>
    </>
  );
};

export default BlogBanner;
