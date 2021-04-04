import React from "react";
import NextLink from "next/link";
import Image from "@/components/Blog/Imager";
import { Box, Text, Link } from "@chakra-ui/react";

const Card = ({ article }) => {
  return (
    <NextLink as={`/article/${article.slug}`} href="/article/[id]">
      <Link>
        <Box>
          <Box>
            <Image image={article.image} />
          </Box>
          <Box>
            <Text id="category">
              {article.category.name}
            </Text>
            <Text id="title">
              {article.title}
            </Text>
          </Box>
        </Box>
      </Link>
    </NextLink>
  );
};

export default Card;