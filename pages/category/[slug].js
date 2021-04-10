import { fetchAPI } from "@/lib/api";
import BlogLayout from "@/components/Blog/BlogLayout";
import Seo from "@/components/Blog/Seo";
import { Box, Text, SimpleGrid, Heading } from "@chakra-ui/react";
import CategoryLayout from "@/components/Blog/CategoryLayout";

const Category = ({ category, categories }) => {
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  };

  return (
    <BlogLayout categories={categories}>
      <Seo seo={seo} />
      <Heading>{category.name}</Heading>
      <Box>
        <SimpleGrid
          minChildWidth="20rem"
          spacing="80px"
          mx={(null, null, null, "7rem")}
        >
          {category.articles.map((article, i) => {
            return (
              // <ArticleCard article={article} categories={categories} key={i}/>
              <CategoryLayout
                article={article}
                categories={categories}
                key={i}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </BlogLayout>
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