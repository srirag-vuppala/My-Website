import Nav from './NavBar/Nav';
import { Box } from '@chakra-ui/react';
import Header from '@/components/Header';

const Layout = ({ children }) => {
    const gradient = "linear(to-l, g_start, g_end)"
    return (
        <>
            <Header title="Srirag's Website" />
            {/* We should make this our navigation bar */}
            <Nav gradient={gradient} />
            <Box>
                    {children}
                    {/* We should make this our footer */} 
            </Box>
        </>
    )
}

export default Layout
