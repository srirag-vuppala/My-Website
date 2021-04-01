import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

const { CONTENT_API_KEY,BLOG_URL} = process.env

async function getPost(slug){
  const res = await fetch(
    `${BLOG_URL}/ghost/api/v3/content/posts/slug/${slug}?key=${CONTENT_API_KEY}&fields=title,slug,html`
  ).then((res) => res.json())
  const post = res.posts[0]

  return post
}

// Ghost CMS Request
export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  return {
    props: { post },
  };
};

// on first request, Ghost CMS call is made
// on other requests, filesystem is called
export const getStaticPaths = () => {
    // paths -> slugs which are allowed
    // fallback -> if something is not present in paths in default do not discard by 404 but just keep it and try getStaticProps if not show 404
    return {
        paths: [],
        fallback: true
    }
}

const Post = (props) => {
    const { post } = props
    const router = useRouter()

    if (router.isFallback) {
        return <h2>Loading ...</h2>
    }

    return (
        <>
            <Head>
                <title>{post.title}</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
                rel="stylesheet"
                />
                <meta name="keywords" content="development, life, philosophy"></meta>
            </Head>
            <Link href='/blog'>Go back</Link>
            <p>------------------------------------</p>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.html}}></div>
        </>
    )
}

export default Post 
