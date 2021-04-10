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
    {/* <HamburgerIcon color="white" boxSize="1.5rem"/> */}
    <HamburgerIcon color="white" boxSize={["20px", "22px"]}/>
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
      <Text display="block" {...rest} color="white" _hover={{textShadow: '2px 1px #7f5af3'}}>
      {/* <Text display="block" {...rest} color="white"> */}
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = (props) => {
  function ShouldClose () {
    if (props.isOpen === true) {
      props.toggle;
    }
  }
  return (
    <Box
      display={{ base: props.isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
      cursor="pointer"
      onClick={ShouldClose}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "column", "row", "row"]}
        pt={[5, 5, 0, 0]}
        px= {4}
      >
        {/* <MenuItem to="/about">About Me</MenuItem> */}
        {/* <MenuItem to="/projects">Projects</MenuItem> */}
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
      bgGradient={props.gradient}
      boxShadow="dark-lg"
      // {...props} this is wrong because it contains isOpen in it
    >
      {children}
    </Flex>
  );
};

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const gradient = props.gradient 

  return (
    <Box mx={2} fontFamily="head">
      <NavBarContainer {...props} isOpen={isOpen}>
        <DarkModeButton borderRadius="100" px="4" mt={[-0.5, -1.2, -1]} />
        <Logo/>

        <MenuToggle toggle={toggle} isOpen={isOpen} />

        <MenuLinks toggle={toggle} isOpen={isOpen} color="white" />
      </NavBarContainer>
    </Box>
  );
};

export default NavBar;
