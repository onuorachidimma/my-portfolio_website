import styles from "../button/contactResume.module.css"
import resumePDF from "../../assets/documents/CHIDIMMA_ONUORA_CV.pdf"

function ContactResume(){

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = resumePDF;
        link.download = "CHIDIMMA_ONUORA_CV.pdf"; // Set the desired filename for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return(
        <>
            <div className={styles.contactResumeContainer}>
                <button className={styles.resumeButton} onClick={handleDownload}>Download Resume <span class={styles.downloadIcon}><svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><circle cx="20" cy="20" r="20" fill="#0A0A0A"/><path d="m20 23.333 3.333-4.166h-2.5v-5.834h-1.666v5.834h-2.5L20 23.333Z" fill="#fff"/><path d="M26.667 25H13.333v-5.833h-1.666V25c0 .92.747 1.667 1.666 1.667h13.334c.919 0 1.666-.748 1.666-1.667v-5.833h-1.666V25Z" fill="#fff"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h40v40H0z"/></clipPath></defs></svg></span>
                </button>
                
            </div>
        </>
    )
}

export default ContactResume