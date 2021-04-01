import React from "react";
import { useColorMode, Circle, Button, Box } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const DarkModeButton = ({ isOpen, ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const onHover = {
    bg: "g_end",
    opacity: '.8',
    

  }
  return (
    <Box cursor="pointer" onClick={toggleColorMode} {...props} >
      {colorMode === "light" ? <MoonIcon color="white" _hover={onHover}/> : <SunIcon _hover={onHover} />}
    </Box>
  );
};

export default DarkModeButton;
