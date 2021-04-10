import BlogBanner from "@/components/Blog/BlogBanner";
import { Box, Flex } from "@chakra-ui/react";
import BorderBox from "@/components/BorderBox";

const BlogLayout = ({ children, categories, seo }) => (
  <>
    <Box mx={5}>
      <BlogBanner categories={categories} />
      <BorderBox>{children}</BorderBox>
    </Box>
  </>
);

export default BlogLayout;
