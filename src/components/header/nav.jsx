import { Link } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"
import styles from "../header/nav.module.css"
import HamburgerNav from "./hamburgerNav"


const Nav = () => {

  
    return(
        <div className={styles.navBar}>
            <p className={styles.myName}>chidimma onuora</p>
            <div className={styles.list}>
                <ul>
                    <Link to="/"><li>Projects</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <ScrollLink className={styles.scrollLink}
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        >
                        Contact
                    </ScrollLink>
                </ul>

            </div>

            <div className={styles.menuIconContainer} >
                <HamburgerNav />
            </div>
        </div>
    )
}

export default Nav