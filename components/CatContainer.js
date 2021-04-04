import React from "react";
import NextLink from "next/link";
import { Box, Text, Header, Link, ListItem, UnorderedList } from '@chakra-ui/react';

const CatContainer = ({ categories }) => {
  return (
    <>
      <Box>
        <UnorderedList>
          <ListItem>
            <NextLink href="/blog">
              <Link>Srirag's Blog</Link>
            </NextLink>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box>
        <br />
        <UnorderedList>
          {categories.map((category) => {
            return (
              <ListItem key={category.id}>
                <NextLink as={`/category/${category.slug}`} href="/category/[id]">
                  <Link>{category.name}</Link>
                </NextLink>
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