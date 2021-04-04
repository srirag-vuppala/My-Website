import React from "react";
import Link from "next/link";
import { Box, Text, Header, ListItem, UnorderedList } from '@chakra-ui/react';

const CatContainer = ({ categories }) => {
  return (
    <>
      <Box>
        <UnorderedList>
          <ListItem>
            <Link href="/blog">
              <a>Strapi Blog</a>
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box>
        <br />
        <UnorderedList>
          {categories.map((category) => {
            return (
              <ListItem key={category.id}>
                <Link as={`/blog/category/${category.slug}`} href="/blog/category/[id]">
                  <a>{category.name}</a>
                </Link>
              </ListItem>
            );
          })}
        </UnorderedList>
        <br />
      </Box>
    </>
  );
};

export default CatContainer;