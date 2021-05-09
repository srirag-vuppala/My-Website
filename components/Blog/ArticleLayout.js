import { Box, Heading, Divider, Flex } from "@chakra-ui/react";
import Seo from "@/components/Blog/Seo";
import MarkdownRenderers from '@/components/Blog/MarkdownRenderers';
import BorderBox from "@/components/BorderBox";
import ArticleFooter from '@/components/Blog/ArticleFooter';
import math from "remark-math";
import { getStrapiMedia } from "@/lib/media";
import ReactMarkdown from "react-markdown";

const ArticleLayout = ({ categories, article }) => {

  const gfm = require("remark-gfm");

  const imageUrl = getStrapiMedia(article.image);

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  };

  return (
  <>
    <Box mx={5}>
      <BorderBox>
        <Seo seo={seo} />
        <Box id="banner" data-src={imageUrl} data-srcset={imageUrl}>
          <Heading fontFamily="Alata" py="0.25rem" align="center">
            {article.title}
          </Heading>
        </Box>
        <Divider />
        <Box>
          <Box mx="0.2rem" maxWidth="100%">
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
      </BorderBox>
    </Box>
  </>
  )
}

export default ArticleLayout;
