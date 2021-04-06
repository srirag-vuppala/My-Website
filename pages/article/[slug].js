import ReactMarkdown from "react-markdown";
import { fetchAPI } from "@/lib/api";
// import Container from "@/components/CatContainer";
import CatLayout from "@/components/Blog/BlogLayout";
import Imager from "@/components/Blog/Imager";
import Seo from "@/components/Blog/Seo";
import { getStrapiMedia } from "@/lib/media";
import {
  Box,
  Heading,
  Text,
  Link,
  Divider,
  UnorderedList,
  ListItem,
  ListIcon,
  Avatar,
} from "@chakra-ui/react";
import MarkdownRenderers from '@/components/Blog/MarkdownRenderers';
import ArticleFooter from '@/components/Blog/ArticleFooter'
import math from "remark-math";

const Article = ({ article, categories }) => {
  const imageUrl = getStrapiMedia(article.image);
  const gfm = require("remark-gfm");

  const NonChakraRenderers = {
    list: (props) => <UnorderedList my={2} spacing={2}>{props.children}</UnorderedList>,
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
        <Heading fontFamily="Alata" py="0.25rem" align="center" >
          {article.title}
        </Heading>
      </Box>
      <Divider />
      <Box>
        <Box mx="2rem" maxWidth="100%">
          <ReactMarkdown
            renderers={MarkdownRenderers}
            source={article.content}
            escapeHtml={false}
            plugins={[[gfm, { singleTilde: false }], [math]]}
          />
          <Divider />
          <ArticleFooter article={article} />
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
