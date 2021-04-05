import React from "react";
import { fetchAPI } from "@/lib/api";
import Seo from "@/components/Seo";
import CatLayout from "@/components/CatLayout";
import Articles from "@/components/Blog/Articles";
import { Box, Text, Heading } from "@chakra-ui/react";
//Strapi version

const blog = ({ articles, categories, homepage }) => {
  return (
    <>
      <CatLayout categories={categories}>
        <Seo seo={homepage.seo} />
        <Box>
          <Heading>{homepage.hero.title}</Heading>
          <Articles articles={articles} categories={categories} />
        </Box>
      </CatLayout>
    </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

export default blog;
