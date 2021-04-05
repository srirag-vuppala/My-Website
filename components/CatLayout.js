import CatContainer from '@/components/CatContainer';
import { Box } from '@chakra-ui/react';

const CatLayout = ({ children, categories, seo }) => (
  <>
  <Box mx={2}>
    <CatContainer categories={categories} />
    {children}
  </Box>
  </>
);

export default CatLayout;