import styles from "./main.module.css"
import SectionHeadings from "../button/sectionHeadings"
import style1 from "../header/hero.module.css"
import hero from "../header/hero.module.css"
import Projects from "./projects"
import TechDetectDashboard from "../../assets/images/TechDetec_Dashboard.png"


function Main(props){
    return(
        <>
            <div className={`${hero.heroMainContainer} ${styles.mainContainer}`}>
                <SectionHeadings heading="Featured Projects"/>
                <p className={`${style1.myProfession} ${styles.projectIntro} `}>Here are some of the selected projects that showcase my passion for front-end development</p>

                <div className={styles.imageProjectContainer}>

                    <a href="https://tech-detect-capstone.vercel.app/" target="_blank" className={styles.projectImage}>
                        
                        <p>Capstone Project</p>
                        <img className={styles.projectImg} src={TechDetectDashboard} alt="" />
                        
                    </a>

                    <div className={styles.projectDescription}>
                        <Projects className={styles.project} projectName="A security website for the detection, monitoring and resolution of malicious activities." projectDescription="Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures." client="Academy" clientName="Tech4Dev" projectInfo="Project Info" projectYear="Year" projectWhichYear="2024" projectRole="Project Role" projectRoleName="Front-End Developer" liveDemeo="Live Demo" gitHub="See on GitHub"/>
                    </div>
                </div>

                <div className={styles.imageProjectContainer}>

                    <a href="https://tech-detect-capstone.vercel.app/" target="_blank" className={styles.projectImage}>
                        
                        <p>Capstone Project</p>
                        <img className={styles.projectImg} src={TechDetectDashboard} alt="" />
                        
                    </a>

                    <div className={styles.projectDescription}>
                        <Projects className={styles.project} projectName="A security website for the detection, monitoring and resolution of malicious activities." projectDescription="Teamed up with a designer to breathe life into a promotional webpage for our beloved show, Adventure Time. Delivered a fully responsive design with dynamic content capabilities, seamlessly integrating a newsletter feature to keep fans updated with the latest adventures." client="Academy" clientName="Tech4Dev" projectInfo="Project Info" projectYear="Year" projectWhichYear="2024" projectRole="Project Role" projectRoleName="Front-End Developer" liveDemeo="Live Demo" gitHub="See on GitHub"/>
                    </div>
                </div>
                
            </div>
            

            
        </>
    )
}

export default Main