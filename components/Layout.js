import Nav from "@/components/NavBar/Nav";
import { Box } from "@chakra-ui/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";


const Layout = ({ children }) => {
  // const Navgradient = "linear(to-l, g_start, g_end)";
  const Navgradient = "repeating-linear(to-l, g_start, g_end)";
  return (
    <>
      <Header title="Srirag's Website" />
      {/* We should make this our navigation bar */}
      <Nav gradient={Navgradient} />
      <Box>
        {children}
      </Box>
      <Box>
        <Footer gradient={Navgradient} />
      </Box>

    </>
  );
};

export default Layout;
