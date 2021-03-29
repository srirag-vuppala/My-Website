import React, { useState } from "react";
import { Box, Flex, Text, Icon, Stack } from "@chakra-ui/react";
// import { TiThMenu } from 'react-icons/ti';
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import DarkModeButton from "./DarkModeButton";

import Link from "next/link";
import Logo from "./Logo";

const CloserIcon = (props) =>(
  <Box {...props}>
    <CloseIcon color="white" />
  </Box>
);

const MenuIcon = (props) => (
  // <Icon as={TiThMenu} color ="white"/>
  <Box {...props}>
    <HamburgerIcon color="white" boxSize="2rem"/>
  </Box>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloserIcon px="4" /> : <MenuIcon px="4" />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest} color="white">
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = (props) => {
  return (
    <Box
      display={{ base: props.isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        // direction={["column", "row", "row", "row"]}
        direction={["column", "column", "row", "row"]}
        pt={[5, 5, 0, 0]}
        px= {4}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About Me</MenuItem>
        <MenuItem to="/blog">Blog</MenuItem>
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      mt={2}
      p={1} 
      px={3}
      borderRadius={ props.isOpen === true ? "20" : "100"}
      // bg={["primary.500", "primary.500", "transparent", "transparent"]}
      // color={["white", "white", "primary.700", "primary.700"]}
      // bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgGradient="linear(to-l, #0d324d, #7f5a83)"
      boxShadow="dark-lg"
      {...props}
    >
      {children}
    </Flex>
  );
};

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Box mx={2} fontFamily="Alata">
      <NavBarContainer {...props} isOpen={isOpen}>
        <DarkModeButton borderRadius="100" px="4" mt={[-0.5, -1.2, -1]} />
        <Logo
          // color={["primary.500", "primary.500"]}
          boxShadow="dark-lg"
          // borderColor="radial(#7928CA, #FF0080)"
          // borderColor="linear(to-l, #7928CA, #FF0080)"
          // border="4px"
          // borderColor=""
          // ml={[0, 0, 0, 0]}
          size="3.5rem"
        />

        <MenuToggle toggle={toggle} isOpen={isOpen} />

        <MenuLinks isOpen={isOpen} color="white" />
      </NavBarContainer>
    </Box>
  );
};

export default NavBar;
