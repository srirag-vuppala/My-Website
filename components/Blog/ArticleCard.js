import React from "react";
import NextLink from "next/link";
import Image from "@/components/Blog/Imager";
import {
  Box,
  Text,
  Badge,
  Divider,
  TagLeftIcon,
  Tag,
  TagLabel,
  Link,
  Stack,
  ListItem,
} from "@chakra-ui/react";
import Moment from "react-moment";
import { FcCalendar } from "react-icons/fc";

const ArticleCard = ({ article, categories }) => {
  // This article card is only for the outward card look not the Article itself
  // console.log(article)
  const getCategoriesNames = () => {
    var i = 0;
    var arr = [];
    if (article.categories != []) {
      for (i = 0; i < article.categories.length; i++) {
        arr.push(article.categories[i].name);
      }
    }
    return arr;
  };

  const getBadges = () => {
    var i = 0;
    var arr = [];
    for (i = 0; i < categories.length; i++) {
      var test = getCategoriesNames(article);
      if (test.includes(categories[i].name) === true) {
        arr.push(
          <Badge
            variant="subtle"
            rounded="full"
            px={2}
            key={categories[i].id}
            id="category"
            bg="g_start"
            color="white"
          >
            <NextLink
              as={`/category/${categories[i].slug}`}
              href="/category/[id]"
            >
              {categories[i].name}
            </NextLink>
          </Badge>
        );
      }
    }
    return arr;
  };

  return (
    <>
      <Box
        w={["15rem", "15rem", "20rem"]}
        rounded="10px"
        overflow="hidden"
        boxShadow="dark-lg"
        bgGradient="conic(g_start, g_end)"
        color="white"
        align="left"
      >
        <Box>
          <Image image={article.image} />
        </Box>
        {/* Inner text/description box */}
        <Box p={5}>
          <Stack isInline align="baseline" flexWrap="wrap" >
            {getBadges()}
          </Stack>
          <Text id="title" as="h2" fontWeight="semibold" fontSize="xl">
            <NextLink as={`/article/${article.slug}`} href="/article/[id]">
              <Link>{article.title}</Link>
            </NextLink>
          </Text>
          <Text isTruncated fontWeight="light" fontSize="md">
            {article.description}
          </Text>
          {/* <Divider /> */}
          <Box align="right" mt={4}>
          <Tag varient="outline" colorScheme="whiteAlpha">
            <TagLeftIcon as={FcCalendar} />
            <TagLabel fontWeight="light" as="em" align="right" color="white" fontSize="sm">
              <Moment format="MMM Do YYYY">{article.published_at}</Moment>
            </TagLabel>
          </Tag>
          </Box>
          {/* Probably want to add estimated reading time here ? */}
        </Box>
      </Box>
    </>
  );
};

export default ArticleCard;
