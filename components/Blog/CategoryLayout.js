import React from "react";
import NextLink from "next/link";
import Image from "@/components/Blog/Imager";
import Moment from "react-moment";
import {
  Box,
  Text,
  Badge,
  Link,
  Stack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

const CategoryLayout = ({ articles }) => {
  return (
    <>
      {/* Might need to change to table */}
      {/* <Table variant="striped" size="lg" colorScheme="blackAlpha"> */}
      <Box overflowX="auto">
        <Table variant="striped" size="lg" colorScheme="facebook">
          <TableCaption>Made with love by Srirag</TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Categories</Th>
              <Th>Published At</Th>
            </Tr>
          </Thead>
          <Tbody>
            {articles.map((article, i) => {
              // console.log(article);
              if (article.status === 'published') {

              return (
                <Tr key={i} id={article.id}>
                  <Td id="title">
                    <NextLink
                      as={`/article/${article.slug}`}
                      href="/article/[id]"
                    >
                      <Link>{article.title}</Link>
                    </NextLink>
                  </Td>
                  <Td>{article.description}</Td>
                  <Td>{article.categories}</Td>
                  {/* <Td>{article.publishedAt}</Td> */}
                  <Td>
                    <Moment format="MMM Do YYYY">{article.published_at}</Moment>
                  </Td>
                  {/* Probably want to add estimated reading time here ? */}
                </Tr>
              );
              }
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Title</Th>
              <Th>Description</Th>
              <Th>Categories</Th>
              <Th>Published At</Th>
            </Tr>
          </Tfoot>
        </Table>
      </Box>
      {/* <Box
        w="20rem"
        rounded="10px"
        overflow="hidden"
        boxShadow="dark-lg"
        bgGradient="conic(g_start, g_end)"
        color="white"
      >
        <Box>
          <Image image={article.image} />
        </Box>
        <Box p={5}>
          <Stack isInline align="baseline">
            {categories.map((category) => {
              if (category.name === article.category.name) {
                return (
                  <Badge
                    variant="solid"
                    rounded="full"
                    px={2}
                    key={category.id}
                    id="category"
                  >
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
        </Box>
      </Box> */}
    </>
  );
};
export default CategoryLayout;
