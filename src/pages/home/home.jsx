import Nav from "../../components/header/nav"
import styles from "../home/home.module.css"

function Home(){
    return(
        <Nav className="navContainer">
            <p className={styles.myName}>chidimma onuora</p>
            <div className={styles.list}>
                <ul>
                    <a href=""><li>Work</li></a>
                    <a href=""><li>About</li></a>
                    <a href=""><li>Contact</li></a>
                </ul>
            </div>

            <div className={styles.menuIconContainer}>
                <svg width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 16h32M6 28h32" stroke="#C7C7C7" stroke-width="2"/></svg>
            </div>
        </Nav>
    )
}

export default Home