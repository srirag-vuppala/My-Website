import { fetchAPI } from "@/lib/api";
import ArticleLayout from "@/components/Blog/ArticleLayout";
import { Box, Heading, Divider, Center } from "@chakra-ui/react";
// const Article = ({ article, categories }) => {
const Article = ({ article }) => {
  return (
    <>
      <Center>
        <Box w={["100%", "95%", "90%", "70%"]}>
          {/* <ArticleLayout categories={categories} article={article} /> */}
          <ArticleLayout article={article} />
        </Box>
      </Center>
    </>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles?status=published");

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  );
  const categories = await fetchAPI("/categories");

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  };
}

export default Article;
