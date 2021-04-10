import React from "react";
import { fetchAPI } from "@/lib/api";
import Seo from "@/components/Blog/Seo";
import BlogLayout from "@/components/Blog/BlogLayout";
import Articles from "@/components/Blog/Articles";
import { Box, Text, Spacer, Divider, Heading } from "@chakra-ui/react";
//Strapi version

const blog = ({ articles, categories, homepage }) => {
  return (
    <>
      <BlogLayout categories={categories}>
        <Seo seo={homepage.seo} />
        <Box>
          <Heading align="center">My most recent blog posts</Heading>
          <Divider my={4}/>
          <Articles articles={articles} categories={categories} />
        </Box>
      </BlogLayout>
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
