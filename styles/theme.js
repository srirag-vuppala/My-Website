import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    body: "Alata, Open Sans"
  }

}


const theme = extendTheme({ config })

export default theme