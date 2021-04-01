import React from "react";
// Head is used if you want custom titles, meta, keywords, desc ...
import Head from "next/head";

const Header = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="keywords" content="development, life, philosophy"></meta>
      </Head>
    </>
  );
};

export default Header;
