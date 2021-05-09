import React from "react";
import { fetchAPI } from "@/lib/api";
import Seo from "@/components/Blog/Seo";
import Articles from "@/components/Blog/Articles";
import { Box, Text, Spacer, Divider, Heading } from "@chakra-ui/react";
import BlogBanner from "@/components/Blog/BlogBanner";
import BorderBox from "@/components/BorderBox";

const blog = ({ articles, categories, homepage }) => {
  return (
    <>
      <Box>
        {/* Blog banner has all the categories listed out  */}
        {/* <BlogBanner categories={categories} mx={5} /> */}

        <BorderBox m={4}>
          <Seo seo={homepage.seo} />
          <Box>
            <Heading align="center" fontFamily="head">
              My most recent blog posts
            </Heading>
            <Divider my={4} />
            {/* This is the layout of the articles on the blog page */}
            <Articles articles={articles} categories={categories} />
          </Box>
        </BorderBox>
      </Box>
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
