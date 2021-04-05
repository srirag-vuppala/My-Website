import React from "react";
import ArticleCard from "@/components/Blog/ArticleCard";
import { Box, Stack, VStack, HStack, SimpleGrid } from "@chakra-ui/react"

const Articles = ({ articles, categories }) => {
  const leftArticlesCount = Math.ceil(articles.length / 5);
  const leftArticles = articles.slice(0, leftArticlesCount);
  const rightArticles = articles.slice(leftArticlesCount, articles.length);

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
       <SimpleGrid minChildWidth= "20rem" spacing="80px">
        {articles.map((article, i) => {
          return (
            <ArticleCard article={article} categories={categories} key={i}/>
          )
        })}
      </SimpleGrid>
    
    </>
  );
};

export default Articles;