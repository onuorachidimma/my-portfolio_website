import Nav from "../../components/header/nav"
import styles from "../home/home.module.css"
import Hero from "../../components/header/hero"
import Footer from "../../components/footer/footer"
import Main from "../../components/main/main"
import { Link } from "react-router-dom"
// import SectionHeadings from "../../components/button/sectionHeadings"



function Home(){
    return(
        <>
            
            <header className={styles.header}>
                {/* <Nav className="navContainer"> */}
                    
                <Nav />
                
                <Hero className={styles.heroContainer} intro1="Hi, I am" introName="Chidimma Onuora" myProfession="A passionate front-end developer. I am enthusiastic about creating software solutions, as well as developing accessible, user-friendly, and responsive websites." />
            
            </header>

            <main className={styles.mainContainer}>
                
                <Main />
              
            </main>

            <footer className={styles.footer}>
                
                <Footer />
                
            </footer>
        </>

        

        
    )
}

export default Home