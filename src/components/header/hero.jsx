import styles from "../header/hero.module.css"
import ContactResume from "../button/contactResume"
import SocialMediaHandles from "../button/socialMediaHandles"
import myImage from "../../assets/images/Chidima_Onuora_ profile picture.png"


function Hero(props){
    return (
        <>
            <div className={styles.heroMainContainer}>
                <section className={styles.introContainer}>
                    <div className={styles.introduction}>
                        <p className={styles.intro}>{props.intro1}</p>
                        <p className={styles.intro}>{props.introName}</p>
                        <p className={styles.myProfession}>{props.myProfession}</p>
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