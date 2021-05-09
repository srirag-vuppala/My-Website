import Banner from '@/components/Home/Banner'
import Header from '@/components/Header'
import WorkExperience from '@/components/Home/WorkExperience'
import Tags from '@/components/Home/Tags'
import { fetchAPI } from "@/lib/api";

export default function Home({ categories }) {
  return (
    <>
      <Header title="Srirag's Website" />
      <Banner />
      <Tags categories={categories} />
      <WorkExperience categories={categories} />
    </>
  );
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ]);

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  };
}

