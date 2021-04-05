import React from "react";
import { getStrapiMedia } from "@/lib/media";
import { Box, Text, Avatar } from "@chakra-ui/react";
import Moment from "react-moment";

const ArticleFooter = ({ article }) => {
  return (
    <>
      <Box py={2}>
        <Box>
          {article.author.picture && (
            //Change to small icon
            <Avatar
              name={article.author.name}
              src={getStrapiMedia(article.author.picture)}
            />
          )}
        </Box>
        <Box>
          <Text>By {article.author.name}</Text>
          <Text>
            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default ArticleFooter;
