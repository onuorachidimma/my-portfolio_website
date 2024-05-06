import { useState, useEffect } from "react"
import styles from "../header/hero.module.css"
import ContactResume from "../button/contactResume"
import SocialMediaHandles from "../button/socialMediaHandles"
import myImage from "../../assets/images/Chidima_Onuora_ profile picture.png"
// import { useEffect } from "react"


function Hero(props){
    const [keywordIndex, setKeywordIndex] = useState(0);
    const keywords = ["dedicated", "creative", "result-driven", "collaborative"];
    const colors = ["cyan", "blue", "green", "orange"];

    useEffect(() => {
        const interval = setInterval(() => {
        setKeywordIndex((prevIndex) => (prevIndex + 1) % keywords.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <div className={styles.heroMainContainer}>
                <section className={styles.introContainer}>
                    <div className={styles.introduction}>
                        <p className={styles.intro}>{props.intro1}</p>
                        <p className={styles.intro}>{props.introName}</p>
                        <p className={styles.myProfession}>A  <span className={`${styles.toggleKeyword} ${styles[colors[keywordIndex]]}`}>
                {keywords[keywordIndex]}
              </span>  front-end developer driven by passion. With a keen eye for detail and a love for creating seamless, user experiences. I specialize in crafting elegant, responsive and functional web applications. My journey in the world of technology has been shaped by my enthusiasm for learning and my commitment to delivering top-notch solutions. I'm excited to share my work and experiences with you. Let's create something amazing together!</p>
                    </div>
                    
                    <div className={styles.downloadLinkedInGithubIcons}>
                        <ContactResume />
                        <SocialMediaHandles />
                    </div>
                </section>

                <section className={styles.headshotImageContainer}>
                    <img src={myImage} alt="My headshot image" />
                </section>
                
                
            </div> 
        </>
    )
}

export default Hero