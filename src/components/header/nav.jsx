import { Link } from "react-router-dom"
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
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </div>

            <div className={styles.menuIconContainer} >
                <HamburgerNav />
            </div>
        </div>
    )
}

export default Nav