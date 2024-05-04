import styles from "./experience.module.css"
const Experience = ({ children }) => {
    return(
        <>
            <div>
                {/* <div className={styles.roleDuration}>
                    <p>{props.role}</p>
                    <p>{props.duration}</p>
                </div>

                <div>
                    <p>{props.jobDescription}</p>
                </div> */}
                {children}
            </div>
        </>
    )
}

export default Experience