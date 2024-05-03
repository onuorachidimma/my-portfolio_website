import styles from "./myCapabilities.module.css"

const MyCapabilities = (props) => {
    return(
        <>
            <div className={styles.capabilitiesContainer}>
                <p className={styles.capabilities}>{props.capabilities}</p>
            </div>
        </>
    )
}

export default MyCapabilities