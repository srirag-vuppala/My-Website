import React from "react";
import { getStrapiMedia } from "@/lib/media";
import { Box, Text, Avatar, HStack, Spacer } from "@chakra-ui/react";
import Moment from "react-moment";

const ArticleFooter = ({ article }) => {
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
    </>
  );
};

export default ArticleFooter;
