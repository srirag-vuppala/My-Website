import styles from '../styles/Layout.module.css'
import Nav from './NavBar/Nav'

const Layout = ({ children }) => {
    return (
        <>
            {/* We should make this our navigation bar */}
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <h2>Srirag's website</h2>
                    {children}
                    {/* We should make this our footer */} 
                </main>
            </div>
        </>
    )
}

export default Layout
