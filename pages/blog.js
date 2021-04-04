import React from "react";
import Link from "next/link";
import { fetchAPI } from "@/lib/api";
import Seo from "@/components/Seo";
import Container from "@/components/CatContainer";
import CatLayout from "@/components/CatLayout";
import Articles from "@/components/Blog/Articles";
import { Box, Text, Heading } from "@chakra-ui/react";

// Ghost version
// const blog = ({ posts }) => {
//   return (
//     <div>
//       <Header title="Blog"/>
//       <h3>This is my blog welcome</h3>
//       <ul>
//         {posts.map((post, index) => (
//           <li key={post.slug}>
//             <Link href="/post/[slug]" as={`/post/${post.slug}`}>
//               <a>{post.title}</a>
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// const { CONTENT_API_KEY, BLOG_URL } = process.env;
// // // Data Fetching
// // // 1. getStaticprops - fetch data at buildtime
// // // 2. getServerSideProps - fetch data at each request (slower)
// // // 3. getStaticPaths - to dynamically generate paths based on data we are fetching

// export const getStaticProps = async () => {
//   const posts = await getPosts();
//   return {
//     props: { posts },
//   };
// };

// async function getPosts() {
//   const res = await fetch(
//     `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt`
//   ).then((res) => res.json());

//   const posts = res.posts;

//   return posts;
// }

//Strapi version

const blog = ({ articles, categories, homepage }) => {
  return (
    <>
      <CatLayout categories={categories}>
        <Seo seo={homepage.seo} />
        <Box>
          <Box>
            <Heading>{homepage.hero.title}</Heading>
            <Articles articles={articles} />
          </Box>
        </Box>
      </CatLayout>
    </>
  );
};

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

export default blog;
