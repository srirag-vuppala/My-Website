// Head is used if you want custom titles, meta, keywords, desc ...
import Head from "next/head";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Srirag's website</title>
        <meta name="keywords" content="development, life, philosophy"></meta>
      </Head>
      <h1>Welcome to Next</h1>
      {articles.map(article => <h3>{article.title}</h3>)}
    </div>
  );
}

// Data Fetching
// 1. getStaticprops - fetch data at buildtime
// 2. getServerSideProps - fetch data at each request (slower)
// 3. getStaticPaths - to dynamically generate paths based on data we are fetching
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();

  return {
    props: {
      articles
    }
  };
};
