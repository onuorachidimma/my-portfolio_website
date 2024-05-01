import styles from "./main.module.css"
import SectionHeadings from "../button/sectionHeadings"
import style1 from "../header/hero.module.css"
import hero from "../header/hero.module.css"
import Projects from "./projects"


function Main(props){
    return(
        <>
            <div className={`${hero.heroMainContainer} ${styles.mainContainer}`}>
            <SectionHeadings heading="Featured Projects"/>
                <p className={`${style1.myProfession} ${styles.projectIntro} `}>Here are some of the selected projects that showcase my passion for front-end development</p>

                <Projects className={styles.project} typeOfProject="Individial" projectThumbnail="" projectName="Genki" projectDescription="Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures." projectInfo="ProjectInfo" projectYear="Year" projectWhichYear="2023" projectRole="Project Role" projectRoleName="Front-End Developer" liveDemeo="Live Demo" gitHub="See on GitHub"/>
                
            </div>
            

            
        </>
    )
}

export default Main