import styles from "./footer.module.css"
import SectionHeadings from "../button/sectionHeadings"
import SocialMediaIcons from "../button/socialMediaIcons"
import SubmitButton from "../button/submitButton"

function Footer(){
    return(
        <div className={styles.footerContainer} id={styles.allFooter}>
            <section className={styles.contactDetailsContainer}>
                <SectionHeadings heading="Let's connect"/>
                <div className={styles.contactMe}>
                    <div className={styles.contactDetails}>
                        <p className={styles.hello}>Say hello at <a className={styles.myEmailResume} href="mailto:onuorachidimma4@gmail.com?subject=Subject%20Here&body=Message%20Here">onuorachidimma4@gmail.com</a></p>
                        <p className={styles.hello}>For more info, here’s my <a className={styles.myEmailResume} href="#">resume</a></p>
                    </div>

                    <SocialMediaIcons />
                </div>
            </section>

            <section className={styles.formContainer}>
                <form action="">
                    <label htmlFor="">Name</label>
                    <input type="text" required/>
                    <label htmlFor="">Email</label>
                    <input type="text" required/>
                    <label htmlFor="">Subject</label>
                    <input type="text" />
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10" required></textarea>
                    <SubmitButton />
                </form>
            </section>
            
        </div>
    )
}

export default Footer