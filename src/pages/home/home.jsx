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
                
                <Hero className={styles.heroContainer} intro1="Hi, I am" introName="Chidimma Onuora" myProfession="A passionate front-end developer driven by passion and dedication. With a keen eye for detail and a love for creating seamless, user experiences. I specialize in crafting elegant, responsive and functional web applications. My journey in the world of technology has been shaped by my enthusiasm for learning and my commitment to delivering top-notch solutions. I'm excited to share my work and experiences with you. Let's create something amazing together!" />
            
            </header>

            <main className={styles.mainContainer}>
                
                <Main />
              
            </main>

            <footer id="contact" className={styles.footer}>
                
                <Footer />
                
            </footer>
        </>

        

        
    )
}

export default Home