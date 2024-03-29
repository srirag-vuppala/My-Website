import React from "react";
import {
  Text,
  Box,
  Code,
  Divider,
  Link,
  Checkbox,
  ListItem,
  ListIcon,
  Heading,
  Image,
  useColorMode,
  OrderedList,
  UnorderedList,
  AspectRatio,
  Center,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ExternalLinkIcon } from "@chakra-ui/icons";

//Markdown code
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Tex from "@matejmazur/react-katex";
import "katex/dist/katex.min.css"; // `react-katex` does not import the CSS for you

function getCoreProps(props) {
  return props["data-sourcepos"]
    ? { "data-sourcepos": props["data-sourcepos"] }
    : {};
}

  function ColorChoose() {
    const { colorMode, toggleColorMode } = useColorMode();
    if (colorMode == "light") {
      return "#0a304a";
    } else {
      return "#7f5a83";
    }
  }

  function ColorChooseBlockQuote() {
    const { colorMode, toggleColorMode } = useColorMode();
    if (colorMode == "light") {
      return "#f9f9f9";
    } else {
      return "#7f5a83";
    }
  }


export const MarkdownRenderers = {
  paragraph: (props) => {
    const { children } = props;
    return <Text my={5}>{children}</Text>;
  },
  emphasis: (props) => {
    const { children } = props;
    return <Text as="em">{children}</Text>;
  },
  blockquote: (props) => {
    const { children } = props;
    return <Box bg={ColorChooseBlockQuote} px={4} py={1} borderRadius={12}><Text as="cite" >{children}</Text></Box>;
  },
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        style={darcula}
        language={language}
        wrapLines={true}
        children={value}
      />
    );
  },
  inlineMath: ({ value }) => <Tex math={value} />,
  math: ({ value }) => <Tex block math={value} />,

  //   code: props => {
  //     const { language, value } = props;
  //     const className = language && `language-${language}`;
  //     return (
  //       <pre {...getCoreProps(props)}>
  //         <Code p={2} className={className || null}>
  //           {value}
  //         </Code>
  //       </pre>
  //     );
  //   },
  delete: (props) => {
    const { children } = props;
    return <Text as="del">{children}</Text>;
  },
  thematicBreak: Divider,
  link: (props) => {
    const { children } = props;
    return (
      // Need to figure out a way to differentiate citation and external
     <Link color={ColorChoose} href={props.href} isExternal>{children}<ExternalLinkIcon mx="2px"/></Link>
     );
  },
  a: (props) => {
    const { children } = props;
    return <Link href={children}>{children}</Link>;
  },
  figcaption: (props) => {
    const { children } = props;
    return (<Center><Text color="red" as="cite">{children}</Text></Center>)
  },
  img: (props) => {
    const { children } = props;
    console.log(props);
    return (<Center><Image src={props.url} alt={props.alt} /></Center>)
  },
  linkReference: Link,
  imageReference: Image,
  text: (props) => {
    const { children } = props;
    return <Text as="span">{children}</Text>;
  },
  list: (props) => {
    const { start, ordered, children, depth } = props;
    const attrs = getCoreProps(props);
    if (start !== null && start !== 1 && start !== undefined) {
      attrs.start = start.toString();
    }
    let Element = UnorderedList;
    let styleType = "disc";
    if (ordered) {
      Element = OrderedList;
      styleType = "decimal";
    }
    if (depth === 1) styleType = "circle";
    return (
      <Element
        spacing={2}
        as={ordered ? "ol" : "ul"}
        styleType={styleType}
        pl={4}
        {...attrs}
      >
        {children}
      </Element>
    );
  },
  listItem: (props) => {
    const { children, checked } = props;
    let checkbox = null;
    if (checked !== null && checked !== undefined) {
      checkbox = (
        <Checkbox isChecked={checked} isReadOnly>
          {children}
        </Checkbox>
      );
    }
    return (
      <ListItem
        {...getCoreProps(props)}
        listStyleType={checked !== null ? "none" : "inherit"}
      >
        {/* <ListIcon as={ArrowForwardIcon} /> */}
        {checkbox || children}
      </ListItem>
    );
  },
  definition: () => null,
  heading: (props) => {
    const { level, children } = props;
    const sizes = ["2xl", "xl", "lg", "md", "sm", "xs"];
    return (
      <Heading
        my={4}
        as={`h${level}`}
        size={sizes[`${level - 1}`]}
        {...getCoreProps(props)}
        fontFamily="Alata"
      >
        {children}
      </Heading>
    );
  },
  inlineCode: (props) => {
    const { children } = props;
    return <Code {...getCoreProps(props)}>{children}</Code>;
  },

  // Need to figure out a way to fix videos for mobile format
  video: (props) => {
    const { children } = props;
    console.log(children);
    return (
      <>
        <AspectRatio ratio={1}>{children}</AspectRatio>
        <Text>b a d um stsss</Text>
      </>
    );
  },
};

export default MarkdownRenderers;
