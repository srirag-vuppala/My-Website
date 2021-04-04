import Articles from "@/components/Blog/Articles";
import { fetchAPI } from "@/lib/api";
import CatLayout from "@/components/CatLayout";
import Seo from "@/components/Seo";
import { Box, Text, Heading } from "@chakra-ui/react";

const Category = ({ category, categories }) => {
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  };

  return (
    <CatLayout categories={categories}>
      <Seo seo={seo} />
      <Box>
        <Heading>{category.name}</Heading>
        <Articles articles={category.articles} />
      </Box>
    </CatLayout>
  );
};

export async function getStaticPaths() {
  const categories = await fetchAPI("/categories");

  return {
    paths: categories.map((category) => ({
      params: {
        slug: category.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const category = (await fetchAPI(`/categories?slug=${params.slug}`))[0];
  const categories = await fetchAPI("/categories");

  return {
    props: { category, categories },
    revalidate: 1,
  };
}

export default Category;