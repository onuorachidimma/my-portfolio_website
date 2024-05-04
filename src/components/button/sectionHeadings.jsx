import styles from "./sectionHeadings.module.css"


function SectionHeadings(props){
    return(
        <>
            <p className={styles.heading}>{props.heading}</p>
        </>
    )
}

export default SectionHeadings