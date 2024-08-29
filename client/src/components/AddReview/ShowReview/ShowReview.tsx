import { Star } from "lucide-react"
import styles from "./ShowReview.module.css"

const ShowReview = () => {
  return (
    <div>
        <p className={styles.title}>Showing 1 review</p>
        <div className={styles.review}>
            <img src="https://3challenge-compass.s3.us-east-2.amazonaws.com/profile-icon.jpg" alt="user-profile" style={{alignSelf: 'flex-start'}} />
            <div className={styles.content}>
                <p style={{ opacity: '0.6', fontSize: '14px'}}>March 20, 2022</p>
                <p className={styles.title}>Sindy Simmons</p>
                <div className={styles.avgReview}>
                    <span className={styles.star}>
                        <Star size={12} fill="white" />
                        <span>4</span>
                    </span>
                    <p style={{ opacity: '0.6', fontSize: '14px'}}>15 reviews</p>
                </div>
                <p>Objectively productivate just in time information with dynamic channels. Energistcally exploit seamless growth strategies after 24/7 experiences.</p>
            </div>
        </div>
    </div>
  )
}

export default ShowReview