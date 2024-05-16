import Nav from "../../components/header/nav"
import { Link } from "react-router-dom"
import styles from "../home/home.module.css"
import Hero from "../../components/header/hero"
import aboutStyles from "./about.module.css"
import heroStyles from "../../components/header/hero.module.css"
import ContactResume from "../../components/button/contactResume"
import SocialMediaHandles from "../../components/button/socialMediaHandles"
import aboutImage from "../../assets/images/Chidimma_OnuoraB.png"
import SectionHeadings from "../../components/button/sectionHeadings"
import MyCapabilities from "../../components/button/myCapabilites"
import Footer from "../../components/footer/footer"
import Experience from "../../components/experience"
import CourseraLogo from "../../assets/images/cousera_logo.png"
import AlxLogo from "../../assets/images/alx_logo.png"
import CodevixenLogo from "../../assets/images/codevixen_logo.png"
import ScrollButton from "../../components/button/scrollBtn"

const About = () => {
  return(
    <>
      <div>
        <Nav />
        <div className={aboutStyles.aboutUsConatiner}>
          <div className={aboutStyles.aboutHero}>
            <section className={aboutStyles.aboutMe}>
              <p className={heroStyles.intro}>About me</p>
            </section>

            <section className={aboutStyles.allAboutMe}>
              <p className={aboutStyles.myBackground}>I am a Front-end Developer based in Nigeria. I thrive at the intersection of creativity and technology. My journey began in Biochemistry, where I cultivated a deep appreciation for detail and problem-solving. </p>
              <p className={aboutStyles.myDeveloperCareer}>Driven by a passion for accessible design, I immerse myself in crafting digital experiences that are not just functional but also inclusive and responsive. Currently, I'm exploring the dynamic realms of React.js, constantly pushing the boundaries of my skills.

              Beyond coding, I indulge in the vast expanse of the internet, constantly seeking inspiration and knowledge to fuel my growth and innovation.</p>

              <div className={heroStyles.downloadLinkedInGithubIcons}>
                <ContactResume />
                <SocialMediaHandles />

              </div>
            </section>
          </div>

          <div className={`${heroStyles.headshotImageContainer} ${aboutStyles.myAboutPicture}`}>
            <img src={aboutImage} alt="My image" />
          </div>

          <div className={aboutStyles.myCapabilitiesContainer}>
            <div className={aboutStyles.headingConatiner}>
              <SectionHeadings heading="My Capabilities"/>
            </div>

            <div className={aboutStyles.capabilitiesSectionContainer}>
              <p className={`${aboutStyles.myDeveloperCareer} ${aboutStyles.capability}`}>
              I am committed to continuous learning and upskilling. I am constantly expanding my skills and staying updated with the latest trends in frontend development. 
              </p>
              <div className={aboutStyles.capabilitiesSection}>
                <MyCapabilities capabilities="HTML"/>
                <MyCapabilities capabilities="CSS"/>
                <MyCapabilities capabilities="Javascript"/>
                <MyCapabilities capabilities="ReactJs"/>
                <MyCapabilities capabilities="Bootstrap"/>
                <MyCapabilities capabilities="GIT"/>
                <MyCapabilities capabilities="GITHUB"/>
              </div>
            </div>
          </div>
        
          <div className={`${aboutStyles.myCapabilitiesContainer} ${aboutStyles.experienceContainer}`}>
           
            <div className={aboutStyles.headingConatiner}>
              <SectionHeadings heading="Volunteer Experience"/>
            </div>

            <div className={`${aboutStyles.capabilitiesSectionContainer} ${aboutStyles.myJob}`}>

            <div>
                <Experience>
                  <div className={aboutStyles.roleDuration}>
                    <p>Frontend Developer</p>
                    <p className={aboutStyles.period}>Mar 2024 — Apr 2024</p>
                  </div>

                  <div className={aboutStyles.myJobDescription}>
                    <p>I contributed to Wikimedia during the May 2024 Outreachy Internship contribution phase, collaborating with the community on open-source projects and gaining valuable experience in version control and collaborative coding practices.</p>
                  </div>
                </Experience>
              </div>
              <div>
                <Experience>
                  <div className={aboutStyles.roleDuration}>
                    <p>Mentor</p>
                    <p className={aboutStyles.period}>March 2023 — Dec 2023</p>
                  </div>

                  <div>
                    <p className={aboutStyles.myJobDescription}>I founded and led an initiative to support women entering the tech space. As part of this initiative, I organized and conducted workshops on bash scripts and basic programming concepts. My role involved mentoring and guiding participants to build a strong foundation in tech before joining the ALX All Female Software Engineering program. I collaborated with colleagues to provide insights and resources.</p>
                  </div>
                </Experience>
              </div>
              
              
            </div>
            
          </div>
          <div className={`${aboutStyles.myCapabilitiesContainer} ${aboutStyles.experienceContainer} ${aboutStyles.certificationContainer}`}>
           
            <div className={aboutStyles.headingConatiner}>
              <SectionHeadings heading="Certifications"/>
            </div>

            <div className={`${aboutStyles.capabilitiesSectionContainer} ${aboutStyles.myJob}`}>

            <div>
                <Experience>
                  <ol>
                    <li><img className={aboutStyles.certificationLogo} src={CourseraLogo} alt="Cousera Logo" /><a href="https://www.coursera.org/account/accomplishments/certificate/N294F8P4TY3Q" target="_blank">Programming with JavaScript</a></li>
                    <li><img className={aboutStyles.certificationLogo} src={CourseraLogo} alt="Cousera Logo" /><a href="https://www.coursera.org/account/accomplishments/certificate/RMB3WMPLXU23" target="_blank">Version Control</a></li>
                    <li><img className={aboutStyles.certificationLogo} src={AlxLogo} alt="alx Logo" /><a href="https://intranet.alxswe.com/certificates/BZhRNCY9M7" target="_blank">Frontend Software Development</a></li>
                    <li><img className={aboutStyles.certificationLogo} src={CodevixenLogo} alt="Codevixen Logo" /><a href="https://res.cloudinary.com/dbv1y1xey/image/upload/v1715822189/Onuora_Chidinma_Blessing_stsiad.pdf" target="_blank">HTML/CSS</a></li>
                  </ol>
                </Experience>
              </div>
              
              
              
            </div>
            
          </div>

          {/* <div className={aboutStyles.capabilitiesSectionContainer}>
            <Experience role="Freelance Developer" duration="Nov 2023 — Present" jobDescription="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
          </div> */}
          
        </div>

        <div id="contact">
          <Footer />
          <ScrollButton />
        </div>
      </div>
    </>
  )
}

export default About