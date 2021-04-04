import CatContainer from '@/components/CatContainer';

const CatLayout = ({ children, categories, seo }) => (
  <>
    <CatContainer categories={categories} />
    {children}
  </>
);

export default CatLayout;