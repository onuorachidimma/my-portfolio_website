import styles from "./contactResume.module.css"

const SubmitButton = () => {
    return(
        <>
            <div>
            <button type="submit" className={`${styles.resumeButton} ${styles.submitButton}`}>Submit</button>
           
            </div>
        </>
    )
}

export default SubmitButton