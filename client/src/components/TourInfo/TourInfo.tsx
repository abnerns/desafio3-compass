import { FaRegHeart } from "react-icons/fa"
import { FiShare2 } from "react-icons/fi"
import { GrLocation } from "react-icons/gr"
import styles from "./TourInfo.module.css"
import { TiStarFullOutline } from "react-icons/ti"
import AverageReview from "../AverageReview/AverageReview"

const TourInfo = () => {
  return (
    <div className={styles.body}>
        <div style={{display: 'flex', paddingTop: '1rem', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', gap: '0.5rem'}}>
                <GrLocation size={24} />
                <span style={{display: 'flex', gap: '1rem'}}><p>Budapest, Hungary</p><p style={{color: '#EB565A'}}>View on map</p></span>
            </div>
            <div style={{display: 'flex', gap: '1rem'}}>
                <FiShare2 size={22} />
                <FaRegHeart size={22} />
            </div>
        </div>
        <p style={{fontSize: '32px', fontWeight: 'bold'}}>Wonders of the West Coast & Kimberly</p>
        <span style={{height: '1px', background: 'black', width: '100%', opacity: '0.2'}}></span>
        <div className={styles.info}>
            <div className={styles.infoBox}>
                <span>From</span>
                <p style={{color: '#dd464b'}}>$104</p>
            </div>
            <div>
                <span>Duration</span>
                <p>7 days</p>
            </div>
            <div>
                <span>Max People</span>
                <p>25</p>
            </div>
            <div>
                <span>Min Age</span>
                <p>12+</p>
            </div>
            <div>
                <span>Tour Type</span>
                <p>Adventure</p>
            </div>
            <div>
                <span>Reviews</span>
                <div style={{display: 'flex', gap: '0.2rem', alignItems: 'center'}}><TiStarFullOutline color="#dd464b" /><p style={{display: 'flex', gap: '0.2rem'}}>4.8<span style={{fontWeight: 'normal' }}>(15 reviews)</span></p></div>
            </div>
        </div>
        <div>
            <p className={styles.title}>Overview</p>
            <p>Istanbul, the vibrant and historic city straddling the continents of Europe and Asia, offers an enchanting blend of cultures, sights, and experiences that captivate every traveler’s heart. As Turkey’s cultural and economic hub. Instabul seamlesly fuses its rich heritage with modernity, creating an unforgettable journey for visitors.</p>
        </div>
        <div>
            <p className={styles.title}>Map</p>
        </div>
        <div>
            <p className={styles.title}>Average Reviews</p>
            <AverageReview />
        </div>
    </div>
  )
}

export default TourInfo