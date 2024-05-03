import styles from "./projects.module.css"

function Projects(props){
    return(
        <>
            <div className={styles.projectContainer}>
                <section>
                    <p className={styles.projectName}>{props.projectName}</p>
                    <p className={styles.projectDescription}>{props.projectDescription}</p>
                </section>
                <section>
                    
                    
                    <div>
                        <p className={styles.projectInfo}>{props.projectInfo}</p>

                        <div className={styles.projectYearContainer}>
                            <p>{props.client}</p>
                            <p className={styles.yearRole}>{props.clientName}</p>
                        </div>
                        
                        <div className={styles.projectYearContainer}>
                            <p>{props.projectYear}</p>
                            <p className={styles.yearRole}>{props.projectWhichYear}</p>
                        </div>

                        <div className={styles.projectYearContainer}>
                            <p>{props.projectRole}</p>
                            <p className={styles.yearRole}>{props.projectRoleName}</p>
                        </div>

                        <div  className={styles.liveDemoContainer}>
                            <div className={styles.liveDemoGithubContainer}>
                                <a href="https://tech-detect-capstone.vercel.app/" target="_blank">{props.liveDemeo}<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M5.99 19.218 16.304 8.904v7.485h2V5.49h-10.9v2h7.485L4.575 17.803l1.415 1.415Z" fill="#D3E97A"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></svg></a> 
                            </div>

                            <div className={styles.liveDemoGithubContainer}>
                                <a href="https://github.com/onuorachidimma/Tech-Detect.capstone" target="_blank">{props.gitHub}<svg width="26" height="26" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.028 2.167c-5.968 0-10.805 4.837-10.805 10.805 0 4.773 3.095 8.824 7.39 10.254.54.097.735-.235.735-.521 0-.257-.009-.938-.012-1.838-3.006.652-3.641-1.45-3.641-1.45-.49-1.247-1.2-1.58-1.2-1.58-.98-.67.076-.655.076-.655 1.085.076 1.654 1.113 1.654 1.113.964 1.651 2.53 1.175 3.144.898.098-.698.38-1.175.688-1.445-2.399-.272-4.921-1.199-4.921-5.34 0-1.178.421-2.144 1.11-2.898-.11-.274-.484-1.374.107-2.86 0 0 .906-.292 2.97 1.106a10.38 10.38 0 0 1 2.704-.364 10.35 10.35 0 0 1 2.704.364c2.065-1.399 2.97-1.106 2.97-1.106.591 1.486.22 2.585.108 2.86.693.754 1.11 1.719 1.11 2.898 0 4.152-2.525 5.064-4.932 5.332.384.333.731.992.731 2 0 1.445-.013 2.61-.013 2.965 0 .289.193.625.744.519 4.292-1.433 7.384-5.48 7.384-10.252 0-5.968-4.837-10.805-10.805-10.805Z" fill="#D3E97A"/></svg></a>
                            </div>
                        </div>
                        
                        
                    </div>
                </section>
            </div>
        </>
    )
}

export default Projects