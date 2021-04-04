import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import { fetchAPI } from "@/lib/api";
// import Container from "@/components/CatContainer";
import CatLayout from "@/components/CatLayout";
import Imager from "@/components/Blog/Imager";
import Seo from "@/components/Seo";
import { getStrapiMedia } from "@/lib/media";
import { Box, Heading, Text, Link, Divider } from "@chakra-ui/react";
import ChakraUIRenderer, { defaults } from "chakra-ui-markdown-renderer";

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image);

  const newTheme = {
    ...defaults,
    paragraph: (props) => {
      const { children } = props;
      return (
        <Text my={100} fontSize={"15px"}>
          {children}
        </Text>
      );
    },
  };

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
    <CatLayout categories={categories}>
      <Seo seo={seo} />
      <Box id="banner" data-src={imageUrl} data-srcset={imageUrl}>
        <Heading fontFamily="Alata" py="0.25rem">{article.title}</Heading>
      </Box>
      <Divider />
      <Box>
        <Box mx="2rem">
          <ReactMarkdown
            // render={ChakraUIRenderer(newTheme)}
            // render={ChakraUIRenderer()}
            source={article.content}
            escapeHtml={false}
          />
          <Divider />
          <Box>
            <Box>
              {article.author.picture && (
                <Imager image={article.author.picture} />
              )}
            </Box>
            <Box>
              <Text>By {article.author.name}</Text>
              <Text>
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </CatLayout>
  );
};

export async function getStaticPaths() {
  const articles = await fetchAPI("/articles");

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
