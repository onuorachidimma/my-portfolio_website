import styles from "../header/nav.module.css"

function Nav({ children }){
    return(
        <div className={styles.navBar}>
            {children}
        </div>
    )
}

export default Nav