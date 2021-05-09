import Seo from "@/components/Blog/Seo";
import { fetchAPI } from "@/lib/api";
import { Box, Text, SimpleGrid, Heading, Badge } from "@chakra-ui/react";
import BorderBox from "@/components/BorderBox";
import CategoryLayout from "@/components/Blog/CategoryLayout";

const Category = ({ category, categories }) => {
  const seo = {
    metaTitle: category.name,
    metaDescription: `All ${category.name} articles`,
  };

  return (
    // <BlogLayout categories={categories}>
    <Box mx={5}>
      <BorderBox>
        <Seo seo={seo} />
        <Heading>
          Blog posts related to{" "}
          <Badge fontSize="1.8rem" ml="1" colorScheme="facebook">
            {category.name}
          </Badge>
        </Heading>
        <CategoryLayout articles={category.articles} />
      </BorderBox>
    </Box>
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
