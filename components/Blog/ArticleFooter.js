import React from "react";
import { getStrapiMedia } from "@/lib/media";
import { Box, Text, Avatar, HStack, Spacer } from "@chakra-ui/react";
import Moment from "react-moment";
import { DiscussionEmbed } from "disqus-react"


const ArticleFooter = ({ article }) => {

  const disqusShortname = "srirag-dev"
  const disqusConfig = {
      url: `http://localhost:3000/article/${article.slug}`,
      identifier: article.id,
      title: article.title,
    }
  return (
    <>
      <HStack py={2}>
        <Box>
          <Text>By {article.author.name}</Text>
          <Text>
            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          </Text>
        </Box>
        <Spacer />
        <Box>
          {article.author.picture && (
            <Avatar
              name={article.author.name}
              src={getStrapiMedia(article.author.picture)}
            />
          )}
        </Box>
      </HStack>
      {/* <DiscussionEmbed shortname={disqusShortname} config={disqusConfig}/> */}
    </>
  );
};

export default ArticleFooter;
