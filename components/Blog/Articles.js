import React from "react";
import ArticleCard from "@/components/Blog/ArticleCard";
import { Box, Stack, VStack, HStack, SimpleGrid, Flex } from "@chakra-ui/react";

const Articles = ({ articles, categories }) => {
  // const leftArticlesCount = Math.ceil(articles.length / 5);
  // const leftArticles = articles.slice(0, leftArticlesCount);
  // const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <>
      {/* <HStack>

      <VStack>
        {leftArticles.map((article, i) => {
          return (
            <ArticleCard article={article} categories={categories} key={i}/>
          )
        })}
      </VStack>
      <VStack>
        {rightArticles.map((article, i) => {
          return (
            <ArticleCard article={article} categories={categories} key={i}/>
          )
        })}
      </VStack>
    </HStack> */}
      {/* <SimpleGrid minChildWidth= "200px" spacing="40px"> */}
      <Box mx={5} align="center">
        {/* <SimpleGrid minChildWidth="20rem" spacing="80px"> */}
        <Flex minChildWidth="20rem" spacing="80px" justify="space-between" flexWrap="wrap" gap="20px">
          {articles.map((article, i) => {
            return (
              <Box key={i} my={3}>
                <ArticleCard article={article} categories={categories} key={i} />
              </Box>
            );
          })}
        {/* </SimpleGrid> */}
        </Flex>
      </Box>
    </>
  );
};

export default Articles;
