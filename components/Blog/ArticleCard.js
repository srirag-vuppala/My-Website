import React from "react";
import NextLink from "next/link";
import Image from "@/components/Blog/Imager";
import { Box, Text, Badge, Link, Stack } from "@chakra-ui/react";

const Card = ({ article }) => {
  // This article card is only for the outward card look not the Article itself
  return (
    <>
      <Box w="400px" rounded="20px" overflow="hidden" boxShadow="sm">
        <Box>
          <Image image={article.image} />
        </Box>
        {/* Inner text/description box */}
        <Box p={5}>
          <Stack isInline align="baseline">
            <Badge variant="solid" rounded="full" px={2} id="category">
              {article.category.name}
            </Badge>
            <Badge variant="solid" rounded="full" px={2} id="category">
              {article.category.name}
            </Badge>
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

export default Card;
