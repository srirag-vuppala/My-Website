import BlogBanner from '@/components/Blog/BlogBanner';
import { Box } from '@chakra-ui/react';

const BlogLayout = ({ children, categories, seo }) => (
  <>
  <Box mx={2}>
    <BlogBanner categories={categories} />
    {children}
  </Box>
  </>
);

export default BlogLayout;