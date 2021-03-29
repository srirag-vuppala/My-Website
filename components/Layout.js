import styles from '../styles/Layout.module.css'
import Nav from './NavBar/Nav'
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Srirag's website</title>
                <meta name="keywords" content="development, life, philosophy"></meta>
            </Head>
            {/* We should make this our navigation bar */}
            <Nav />
            <div >
                <main>
                    {children}
                    {/* We should make this our footer */} 

                </main>
            </div>
        </>
    )
}

export default Layout
