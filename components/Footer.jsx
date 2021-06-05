import styles from '../styles/Footer.module.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <hr/>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogo}>
                <Image src='/images/footerLogo.svg' width={174} height={124}/>
                </div>
                <ul>
                    <li>Work</li>
                    <li>How it works</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
                <ul>
                    <li>Linkedin</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>Medium</li>
                </ul>
                <p className={styles.footerCopyright}>© <span>Copyright@{(new Date().getFullYear())}</span></p>
            </div>
        </div>
    )
}

export default Footer
