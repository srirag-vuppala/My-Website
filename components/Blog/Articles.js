{/* This is the layout of the articles on the blog page */}
import React from "react";
import ArticleCard from "@/components/Blog/ArticleCard";
import { Box, Spacer, Stack, VStack, HStack, SimpleGrid, Flex } from "@chakra-ui/react";


const Articles = ({ articles, categories }) => {
  // const leftArticlesCount = Math.ceil(articles.length / 5);
  // const leftArticles = articles.slice(0, leftArticlesCount);
  // const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <>
      <Box mx={10} align="center" justify="center">
        <Flex justify="space-between" flexWrap="wrap">
          {articles.map((article, i) => {
            return (
              <Box key={i} my={3} mx={6}>
                <ArticleCard article={article} categories={categories} key={i} />
                <Spacer />
              </Box>
            );
          })}
        </Flex>
      </Box>
    </>
  );
};

export default Articles;
