import React from "react";
import Header from "@/components/Header";
import Link from "next/link";

const blog = ({ posts }) => {
  return (
    <div>
      <Header title="Blog"/>
      <h3>This is my blog welcome</h3>
      <ul>
        {posts.map((post, index) => (
          <li key={post.slug}>
            <Link href="/post/[slug]" as={`/post/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
const { CONTENT_API_KEY, BLOG_URL } = process.env;
// // Data Fetching
// // 1. getStaticprops - fetch data at buildtime
// // 2. getServerSideProps - fetch data at each request (slower)
// // 3. getStaticPaths - to dynamically generate paths based on data we are fetching

export const getStaticProps = async () => {
  const posts = await getPosts();
  return {
    props: { posts },
  };
};

async function getPosts() {
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/?key=${CONTENT_API_KEY}&fields=title,slug,custom_excerpt`
  ).then((res) => res.json());

  const posts = res.posts;

  return posts;
}

export default blog;