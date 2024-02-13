import styles from "../header/hero.module.css"
import ContactResume from "../button/contactResume"
import SocialMediaHandles from "../button/socialMediaHandles"


function Hero(props){
    return (
        <>
            <div className={styles.heroContainer}>
                <section>
                    <p className={styles.intro}>{props.intro1}</p>
                    <p>{props.introName}</p>
                    <p>{props.myProfession}</p>
                </section>
                
                <section className={styles.downloadLinkedInGithubIcons}>
                    <ContactResume />
                    <SocialMediaHandles />
                </section>
                
                
            </div> 
        </>
    )
}

export default Hero