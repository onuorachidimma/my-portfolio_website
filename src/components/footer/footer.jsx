import React from "react";
import styles from "./footer.module.css";
import SectionHeadings from "../button/sectionHeadings";
import SocialMediaIcons from "../button/socialMediaIcons";
import SubmitButton from "../button/submitButton";

function Footer() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Message sent successfully!");
                event.target.reset();
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            alert("An error occurred.");
        }
    };

    return (
        <div>
            <div className={styles.footerContainer}>
                <section className={styles.contactDetailsContainer}>
                    <SectionHeadings heading="Let's connect" />
                    <div className={styles.contactMe}>
                        <div className={styles.contactDetails}>
                            <p className={styles.hello}>Say hello at <a className={styles.myEmailResume} href="mailto:onuorachidimma4@gmail.com?subject=Subject%20Here&body=Message%20Here">onuorachidimma4@gmail.com</a></p>
                            <p className={styles.hello}>For more info, here’s my <a className={styles.myEmailResume} href="#">resume</a></p>
                        </div>

                        <SocialMediaIcons />
                    </div>
                </section>

                <section className={styles.formContainer}>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" />
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" cols="30" rows="10" required></textarea>
                        <SubmitButton />
                    </form>
                </section>
            </div>
            <div className={styles.credit}>
                <a href="https://www.figma.com/@sumn2u">Designed by Suman Kunwar</a>
            </div>
        </div>
    );
}

export default Footer;
