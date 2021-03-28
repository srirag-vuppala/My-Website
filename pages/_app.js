import Layout from '../components/Layout'
import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
// import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    // <ChakraProvider theme={theme}>
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
