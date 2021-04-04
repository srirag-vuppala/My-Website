import React from "react";
import ArticleCard from "@/components/Blog/ArticleCard";
import { Box } from "@chakra-ui/react"

const Articles = ({ articles }) => {
  // const leftArticlesCount = Math.ceil(articles.length / 5);
  // const leftArticles = articles.slice(0, leftArticlesCount);
  // const rightArticles = articles.slice(leftArticlesCount, articles.length);

  return (
    <>
      <Box>
        {articles.map((article, i) => {
          return (
            <ArticleCard article={article} key={i}/>
          )
        })}
      </Box>
    </>
    // <div>
    //   <div>
    //     <div>
    //       {leftArticles.map((article, i) => {
    //         return (
    //           <ArticleCard article={article} key={`article__left__${article.slug}`} />
    //         );
    //       })}
    //     </div>
    //     <div>
    //       <div >
    //         {rightArticles.map((article, i) => {
    //           return (
    //             <ArticleCard
    //               article={article}
    //               key={`article__left__${article.slug}`}
    //             />
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Articles;