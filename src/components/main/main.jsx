import styles from "./main.module.css"
import SectionHeadings from "../button/sectionHeadings"
import style1 from "../header/hero.module.css"
import hero from "../header/hero.module.css"
import Projects from "./projects"
import TechDetectDashboard from "../../assets/images/TechDetec_Dashboard.png"
import QuizApp from "../../assets/images/quiz_App.png"
import FlexBlog from "../../assets/images/flexBlog.png"


function Main(props){
    return(
        <>
            <div className={`${hero.heroMainContainer} ${styles.mainContainer}`}>
                <SectionHeadings heading="Featured Projects"/>
                <p className={`${style1.myProfession} ${styles.projectIntro} `}>Here are some of the selected projects that showcase my passion for front-end development</p>

                <div className={styles.imageProjectContainer}>

                    <a href="https://tech-detect-capstone.vercel.app/" target="_blank" className={styles.projectImage}>
                        
                        
                        <div className={styles.projectImgContainer}>
                            <p>Capstone Project</p>
                            <img className={styles.projectImg} src={TechDetectDashboard} alt="Screenshot of TechDetect Dashboard homepage" />
                        </div>
                        
                    </a>

                    <div className={styles.projectDescription}>
                        <Projects className={styles.project} projectName="TechDetect: A web app designed to safeguard users by scanning, detecting and resolving malicious activities and threats." projectDescription="As the sole frontend developer, I collaborated closely with a team of project managers and product designers, we transformed ideas into a robust solution. Leveraging React as the frontend framework, TechDetect stands as a testament to my ability to translate complex security concepts into intuitive user experiences, ensuring every interaction is seamless." client="Academy" clientName="Tech4Dev" projectInfo="Project Info" projectYear="Year" projectWhichYear="2024" projectRole="Project Role" projectRoleName="Front-End Developer" liveDemeo="Live Demo" liveLink="https://tech-detect-capstone.vercel.app/" gitHub="See on GitHub" githubLink="https://github.com/onuorachidimma/Tech-Detect.capstone"/>
                    </div>
                </div>

                <div className={styles.imageProjectContainer}>

                    <a href="https://quiz-app-beryl-nu.vercel.app/" target="_blank" className={styles.projectImage}>
                        
                        
                        <div className={styles.projectImgContainer}>
                            <p>Individual</p>
                            <img className={styles.projectImg} src={QuizApp} alt="Screenshot of Quiz App homepage" />
                        </div>
                        
                    </a>

                    <div className={styles.projectDescription}>
                        <Projects className={styles.project} projectName="Quiz App: This interactive web app allows users to test their knowledge on frontend development through a series of quiz questions and answers." projectDescription="Built entirely with JavaScript, I designed and implemented the quiz logic, and result tracking functionality. The project showcases my proficiency in JavaScript and my ability to create dynamic and interactie web applications." projectInfo="Project Info" projectYear="Year" projectWhichYear="2024" projectRole="Project Role" projectRoleName="Front-End Developer" liveDemeo="Live Demo" liveLink="https://quiz-app-beryl-nu.vercel.app/" gitHub="See on GitHub" githubLink="https://github.com/onuorachidimma/Quiz_App"/>
                    </div>
                </div>

                <div className={styles.imageProjectContainer}>

                    <a href="https://flex-blog-bay.vercel.app/" target="_blank" className={styles.projectImage}>
                        
                        
                        <div className={styles.projectImgContainer}>
                            <p>Challenge</p>
                            <img className={styles.projectImg} src={FlexBlog} alt="Screenshot of FlexBlog homepage" />
                        </div>
                        
                    </a>

                    <div className={styles.projectDescription}>
                        <Projects className={styles.project} projectName="FlexBlog: A challenge project where I honed my skills in Flexbox and CSS Grid. This webpage serves as a hands-on exercise to strengthen proficiency in layout design using modern CSS techniques" projectDescription="Utilizing JavaScript, I dynamically added content to the page. FlexBlog not only showcases my skill in front-end development but also demonstrates my ability to create dynamic, interactive, engaging and responsive web experiences.." projectInfo="Project Info" projectYear="Year" projectWhichYear="2023" projectRole="Project Role" projectRoleName="Front-End Developer" liveDemeo="Live Demo" liveLink="https://flex-blog-bay.vercel.app/" gitHub="See on GitHub" githubLink="https://github.com/onuorachidimma/Flex-Blog"/>
                    </div>
                </div>
                
                
            </div>
            

            
        </>
    )
}

export default Main