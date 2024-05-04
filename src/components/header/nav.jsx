import { Link } from "react-router-dom"
import styles from "../header/nav.module.css"

const Nav = () => {
    return(
        <div className={styles.navBar}>
            <p className={styles.myName}>chidimma onuora</p>
                    <div className={styles.list}>
                        <ul>
                            <Link to="/"><li>Projects</li></Link>
                            <Link to="/about"><li>About</li></Link>
                            <Link to="#allFooter"><li>Contact</li></Link>
                        </ul>
                    </div>

                    <div className={styles.menuIconContainer}>
                        <svg width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 16h32M6 28h32" stroke="#C7C7C7" stroke-width="2"/></svg>
                    </div>
        </div>
    )
}

export default Nav