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
              <p className={aboutStyles.myBackground}>I am a front-end developer based in Nigeria. Has background in Biochemistry. </p>
              <p className={aboutStyles.myDeveloperCareer}>I am a front-end developer based in Nigeria looking for exciting opportunities. Has a Biochemistry background. Likes to focus on accessibility when developing. Passionate and curious about solving problems. Currently, I’m exploring Reactjs, Webflow and a bit of Designing. While I am not programming, I am surfing the internet. Learning more to improve skill</p>

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
              I am always looking to add more skills.Morbi egestas neque eu blandit fermentum. Nulla ac lobortis ligula. Pellentesque ac ex at purus faucibus tristique ut et dolor. 
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
              <SectionHeadings heading="My Experience"/>
            </div>

            <div className={`${aboutStyles.capabilitiesSectionContainer} ${aboutStyles.myJob}`}>

              <div>
                <Experience>
                  <div className={aboutStyles.roleDuration}>
                    <p>Freelance Developer</p>
                    <p className={aboutStyles.period}>Nov 2023 — Present</p>
                  </div>

                  <div>
                    <p className={aboutStyles.myJobDescription}>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  </div>
                </Experience>
              </div>
              
              <div>
                <Experience>
                  <div className={aboutStyles.roleDuration}>
                    <p>Freelance Developer</p>
                    <p className={aboutStyles.period}>Nov 2023 — Present</p>
                  </div>

                  <div className={aboutStyles.myJobDescription}>
                    <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  </div>
                </Experience>
              </div>
            </div>
            
          </div>

          {/* <div className={aboutStyles.capabilitiesSectionContainer}>
            <Experience role="Freelance Developer" duration="Nov 2023 — Present" jobDescription="Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
          </div> */}
          
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default About