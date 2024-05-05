import { useState } from "react"
import { Link } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"
import styles from "./hamburgerNav.module.css"

const HamburgerNav = () => {
    const [navModal, setNavModal] = useState(false)
    
    const toggleSidebar = () => {
        setNavModal(!navModal)
    }


    return(
        <>
            <div onClick={toggleSidebar}>
                <svg width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 16h32M6 28h32" stroke="#C7C7C7" stroke-width="2"/></svg>
            </div>

            {navModal &&(
                <div className={styles.hamgurgerSidear}>
                    <p onClick={toggleSidebar} className={styles.closeBtn}>&#10006;</p>
                    <ul>
                        <Link onClick={toggleSidebar} to="/"><li>Projects</li></Link>
                        <Link onClick={toggleSidebar} to="/about"><li>About</li></Link>
                        <ScrollLink className={styles.scrollLink}
                            onClick={toggleSidebar}
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
            )}
        </>
    )
}

export default HamburgerNav