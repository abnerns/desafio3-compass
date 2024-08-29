import { FaStar } from "react-icons/fa"
import styles from "./AverageReview.module.css"
import { ProgressBar } from "react-bootstrap"
import ShowReview from "../ShowReview/ShowReview"

const AverageReview = () => {
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.avgBox}>
                <p style={{fontWeight: 'bold', fontSize: '56px', margin: '0'}}>4.8</p>
                <span style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}><FaStar color="white" /><p style={{margin: '0'}}>Excellent</p></span>
            </div>
            <div className={styles.reviewBox}>
                <div><p>Services</p><span><ProgressBar variant="danger" now={60} style={{width: '202px', height: '8px'}} /><p>4.0</p></span></div>
                <div><p>Prices</p><span><ProgressBar variant="danger" now={60} style={{width: '202px', height: '8px'}} /><p>4.0</p></span></div>
                <div><p>Locations</p><span><ProgressBar variant="danger" now={60} style={{width: '202px', height: '8px'}} /><p>4.0</p></span></div>
                <div><p>Food</p><span><ProgressBar variant="danger" now={60} style={{width: '202px', height: '8px'}} /><p>4.0</p></span></div>
                <div><p>Amenities</p><span><ProgressBar variant="danger" now={60} style={{width: '202px', height: '8px'}} /><p>4.0</p></span></div>
                <div><p>Room comfort and quality</p><span><ProgressBar variant="danger" now={60} style={{width: '202px', height: '8px'}} /><p>4.0</p></span></div>
            </div>
        </div>
        <ShowReview />
    </div>
    
  )
}

export default AverageReview