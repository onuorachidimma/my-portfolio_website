import styles from "./main.module.css"
import SectionHeadings from "../button/sectionHeadings"
import style1 from "../header/hero.module.css"
import hero from "../header/hero.module.css"
import Projects from "./projects"
import TechDetectDashboard from "../../assets/images/TechDetec_Dashboard.png"
import Spotify from "../../assets/images/spotify.PNG"
import photoGallery from "../../assets/images/photoGallery.PNG"
import medium from "../../assets/images/medium.PNG"
import todo from "../../assets/images/todo.PNG"
import age from "../../assets/images/age.PNG"
import weather from "../../assets/images/weather.PNG"
import watch from "../../assets/images/watch.PNG"
import quote from "../../assets/images/quote.PNG"
import form from "../../assets/images/form.PNG"


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
                        <Projects className={styles.project} projectName="TechDetect" projectDescription="A web app designed to safeguard users by scanning, detecting and resolving malicious activities and threats. As the sole frontend developer, I collaborated closely with a team of project managers and product designers, we transformed ideas into a robust solution. Leveraging React as the frontend framework, TechDetect stands as a testament to my ability to translate complex security concepts into intuitive user experiences, ensuring every interaction is seamless." client="Academy" clientName="Tech4Dev" projectInfo="Project Info" projectYear="Year" projectWhichYear="2024" projectRole="Project Role" projectRoleName="Front-End Developer" liveDemeo="Live Demo" liveLink="https://tech-detect-capstone.vercel.app/" gitHub="See on GitHub" githubLink="https://github.com/onuorachidimma/Tech-Detect.capstone"/>
                    </div>
                </div>

                <div className={styles.imageProjectContainer}>

                    <a href="https://weather-app-mbhx.vercel.app/" target="_blank" className={styles.projectImage}>
                        
                        
                        <div className={styles.projectImgContainer}>
                            <p>Coding Challenge</p>
                            <img className={styles.projectImg} src={Spotify} alt="Screenshot of Spotify Landing Page" />
                        </div>
                        
                    </a>

                    <div className={styles.projectDescription}>
                        <Projects className={styles.project} projectName="Spotify Landing Page" projectDescription="Replicated the Spotify landing page using React JS, styled with CSS Flexbox and Grid, and implemented responsive design principles with media queries. The project demonstrates my ability to structure and style complex UI components using modern web technologies, ensuring a consistent and adaptive user experience across devices." projectInfo="Project Info" projectYear="Year" projectWhichYear="2024" projectRole="Project Role" projectRoleName="Front-End Developer" liveDemeo="Live Demo" liveLink="https://weather-app-mbhx.vercel.app/" gitHub="See on GitHub" githubLink="https://github.com/onuorachidimma/spotify-landingpage"/>
                    </div>
                </div>

                <div className={styles.imageProjectContainer}>

                    <a href="https://photo-gallery-five-rho.vercel.app/" target="_blank" className={styles.projectImage}>
                        
                        
                        <div className={styles.projectImgContainer}>
                            <p>Coding Challenge</p>
                            <img className={styles.projectImg} src={photoGallery} alt="Photo Gallery App screenshot" />
                        </div>
                        
                    </a>

                    <div className={styles.projectDescription}>
                        <Projects className={styles.project} projectName="Photo Gallery App" projectDescription="Developed a dynamic photo gallery using React JS, integrated with the Unsplash API to fetch and display images. The project showcases my skill in API integration, state management with React's useState and useEffect hooks, and creating a responsive UI using Tailwind CSS, ensuring a seamless and interactive user experience." projectInfo="Project Info" projectYear="Year" projectWhichYear="2024" projectRole="Project Role" projectRoleName="Front-End Developer" liveDemeo="Live Demo" liveLink="https://photo-gallery-five-rho.vercel.app/" gitHub="See on GitHub" githubLink="https://github.com/onuorachidimma/photo_gallery"/>
                    </div>
                </div>

                <div className={styles.imageProjectContainer}>

                    <a href="https://medium-clone1-alpha.vercel.app/#" target="_blank" className={styles.projectImage}>
                        
                        
                        <div className={styles.projectImgContainer}>
                            <p>Coding Challenge</p>
                            <img className={styles.projectImg} src={medium} alt="Medium Landing page screenshot" />
                        </div>
                        
                    </a>

                    <div className={styles.projectDescription}>
                        <Projects className={styles.project} projectName="Medium Clone" projectDescription="The medium landing page was cloned using React JS, showcasing the ability to structure complex UI components and manage state effectively. The project involved creating a responsive and visually consistent design, utilizing HTML, CSS, and React's state management to deliver an adaptive user experience across devices." projectInfo="Project Info" projectYear="Year" projectWhichYear="2024" projectRole="Project Role" projectRoleName="Front-End Developer" liveDemeo="Live Demo" liveLink="https://medium-clone1-alpha.vercel.app/#" gitHub="See on GitHub" githubLink="https://github.com/onuorachidimma/medium_clone"/>
                    </div>
                </div>

                <div className={styles.imageProjectContainer}>

                    <a href="https://simple-to-do-app-eight.vercel.app/" target="_blank" className={styles.projectImage}>
                        
                        
                        <div className={styles.projectImgContainer}>
                            <p>Coding Challenge</p>
                            <img className={styles.projectImg} src={todo} alt="To-Do list App screenshot" />
                        </div>
                        
                    </a>

                    <div className={styles.projectDescription}>
                        <Projects className={styles.project} projectName="To-Do List App" projectDescription="Developed a responsive To-Do List application using React JS and Tailwind CSS. The project highlights my skills in state management, event handling, and rendering dynamic lists. Users can add, complete, and delete tasks, all within a clean and intuitive UI, demonstrating the ability to create functional, interactive web applications." projectInfo="Project Info" projectYear="Year" projectWhichYear="2024" projectRole="Project Role" projectRoleName="Front-End Developer" liveDemeo="Live Demo" liveLink="https://simple-to-do-app-eight.vercel.app/" gitHub="See on GitHub" githubLink="https://github.com/onuorachidimma/simple_ToDo_App"/>
                    </div>
                </div>

                <div className={styles.imageProjectContainer}>

                    <a href="https://age-calculator-phi-rouge.vercel.app/" target="_blank" className={styles.projectImage}>
                        
                        
                        <div className={styles.projectImgContainer}>
                            <p>Coding Challenge</p>
                            <img className={styles.projectImg} src={age} alt="Age Calculator App screenshot" />
                        </div>
                        
                    </a>

                    <div className={styles.projectDescription}>
                        <Projects className={styles.project} projectName="Age Calculator" projectDescription="I created a simple Age Calculator application using React JS. This project showcases my skills in state management, event handling, and form creation. Users can input their birthdate, and the app will calculate and display their age based on the current date in year(s), month(s) and day(s), demonstrating my ability to build interactive and user-friendly forms." projectInfo="Project Info" projectYear="Year" projectWhichYear="2024" projectRole="Project Role" projectRoleName="Front-End Developer" liveDemeo="Live Demo" liveLink="https://age-calculator-phi-rouge.vercel.app/" gitHub="See on GitHub" githubLink="https://github.com/onuorachidimma/age_calculator"/>
                    </div>
                </div>

                <div className={styles.imageProjectContainer}>

                    <a href="https://weather-app-onuorachidimma4gmailcoms-projects.vercel.app/" target="_blank" className={styles.projectImage}>
                        
                        
                        <div className={styles.projectImgContainer}>
                            <p>Coding Challenge</p>
                            <img className={styles.projectImg} src={weather} alt="Weather App screenshot" />
                        </div>
                        
                    </a>

                    <div className={styles.projectDescription}>
                        <Projects className={styles.project} projectName="Weather App" projectDescription="Developed a Weather App using React JS, integrating the OpenWeatherMap API. This project demonstrates my proficiency in API integration, state management, and responsive UI design. Users can input a city name to retrieve and display real-time weather data, including temperature, humidity, and weather conditions, providing a seamless and interactive user experience." projectInfo="Project Info" projectYear="Year" projectWhichYear="2024" projectRole="Project Role" projectRoleName="Front-End Developer" liveDemeo="Live Demo" liveLink="https://weather-app-onuorachidimma4gmailcoms-projects.vercel.app/" gitHub="See on GitHub" githubLink="https://github.com/onuorachidimma/WeatherApp"/>
                    </div>
                </div>

                <div className={styles.imageProjectContainer}>

                    <a href="https://stop-watch-amber-nine.vercel.app/" target="_blank" className={styles.projectImage}>
                        
                        
                        <div className={styles.projectImgContainer}>
                            <p>Coding Challenge</p>
                            <img className={styles.projectImg} src={watch} alt="Stopwatch App screenshot" />
                        </div>
                        
                    </a>

                    <div className={styles.projectDescription}>
                        <Projects className={styles.project} projectName="Stopwatch App" projectDescription="Built a functional Stopwatch App using React JS, focusing on state management, event handling, and React lifecycle methods. The app features start, stop, and reset functionalities, accurately tracking and displaying elapsed time in a user-friendly interface. This project showcases my ability to manage component lifecycles in React." projectInfo="Project Info" projectYear="Year" projectWhichYear="2024" projectRole="Project Role" projectRoleName="Front-End Developer" liveDemeo="Live Demo" liveLink="https://stop-watch-amber-nine.vercel.app/" gitHub="See on GitHub" githubLink="https://github.com/onuorachidimma/stop_watch"/>
                    </div>
                </div>

                <div className={styles.imageProjectContainer}>

                    <a href="https://quote-generator-eta-peach.vercel.app/" target="_blank" className={styles.projectImage}>
                        
                        
                        <div className={styles.projectImgContainer}>
                            <p>Coding Challenge</p>
                            <img className={styles.projectImg} src={quote} alt="Quote generator App screenshot" />
                        </div>
                        
                    </a>

                    <div className={styles.projectDescription}>
                        <Projects className={styles.project} projectName="Quote Generator" projectDescription="Developed a Quote Generator App in React JS that fetches and displays random quotes from an external API. The project demonstrates my skills in API integration, state management, and building interactive user interfaces. Users can generate new quotes with a button click, showcasing dynamic data handling in a seamless UI." projectInfo="Project Info" projectYear="Year" projectWhichYear="2024" projectRole="Project Role" projectRoleName="Front-End Developer" liveDemeo="Live Demo" liveLink="https://quote-generator-eta-peach.vercel.app/" gitHub="See on GitHub" githubLink="https://github.com/onuorachidimma/quote-generator"/>
                    </div>
                </div>

                <div className={styles.imageProjectContainer}>

                    <a href="https://dynamic-form-opal.vercel.app/" target="_blank" className={styles.projectImage}>
                        
                        
                        <div className={styles.projectImgContainer}>
                            <p>Coding Challenge</p>
                            <img className={styles.projectImg} src={form} alt="Quote generator App screenshot" />
                        </div>
                        
                    </a>

                    <div className={styles.projectDescription}>
                        <Projects className={styles.project} projectName="Dynamic Form" projectDescription="This project emphasizes handling controlled components, implementing form validation, and managing error feedback. Users can enter their details, with validation rules for fields such as Name, Email, and Password, ensuring a robust and user-friendly form experience." projectInfo="Project Info" projectYear="Year" projectWhichYear="2024" projectRole="Project Role" projectRoleName="Front-End Developer" liveDemeo="Live Demo" liveLink="https://dynamic-form-opal.vercel.app/" gitHub="See on GitHub" githubLink="https://github.com/onuorachidimma/quote-generator"/>
                    </div>
                </div>
                
                
            </div>
            

            
        </>
    )
}

export default Main