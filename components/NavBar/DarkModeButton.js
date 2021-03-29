import React from 'react'
import { useColorMode, Circle, Button, Box } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const DarkModeButton = ({ isOpen, ...props }) => {
    const {colorMode, toggleColorMode} = useColorMode()
    return (
        <Box onClick={toggleColorMode} {...props}>
            {colorMode === "light" ? <MoonIcon color="white" /> : <SunIcon />}
        </Box>
    )
}

export default DarkModeButton
