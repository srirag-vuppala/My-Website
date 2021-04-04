import Banner from '@/components/Home/Banner'
import Header from '@/components/Header'

export default function Home({ articles, categories, homepage}) {
  return (
    <>
      <Header title="Srirag's Website" />
      <Banner />
    </>
  );
}


// export async function getStaticProps() {
//   // Run API calls in parallel
//   const [articles, categories, homepage] = await Promise.all([
//     fetchAPI("/articles?status=published"),
//     fetchAPI("/categories"),
//     fetchAPI("/homepage"),
//   ]);

//   return {
//     props: { articles, categories, homepage },
//     revalidate: 1,
//   };
// }