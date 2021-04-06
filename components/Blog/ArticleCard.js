import React from "react";
import NextLink from "next/link";
import Image from "@/components/Blog/Imager";
import { Box, Text, Badge, Link, Stack, ListItem } from "@chakra-ui/react";

const ArticleCard = ({ article, categories }) => {
  // This article card is only for the outward card look not the Article itself
  return (
    <>
      <Box w="20rem" rounded="10px" overflow="hidden" boxShadow="dark-lg" bgGradient="conic(g_start, g_end)" color="white">
        <Box>
          <Image image={article.image} />
        </Box>
        {/* Inner text/description box */}
        <Box p={5}>
          <Stack isInline align="baseline">
              {categories.map((category) => {
                if (category.name === article.category.name) {
                  return (
                    <Badge variant="solid" rounded="full" px={2} key={category.id} id="category">
                      <NextLink
                        as={`/category/${category.slug}`}
                        href="/category/[id]"
                      >
                        {article.category.name}
                      </NextLink>
                    </Badge>
                  );
                }
              })}
          </Stack>
          <Text id="title" as="h2" fontWeight="semibold" fontSize="xl">
            <NextLink as={`/article/${article.slug}`} href="/article/[id]">
              <Link>{article.title}</Link>
            </NextLink>
          </Text>
          <Text isTruncated fontWeight="light" fontSize="md">
            {article.description}
          </Text>
          {/* Probably want to add estimated reading time here ? */}
        </Box>
      </Box>
    </>
  );
};

export default ArticleCard;
