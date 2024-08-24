import { BsSuitcase } from "react-icons/bs"
import styles from "./TourCard.module.css"
import { TourCardProps } from "./types"

const TourCard : React.FC<TourCardProps> = ({ category }) => {
  return (
    <div className={styles.card}>
        <span className={styles.circle}><BsSuitcase size={30} /></span>
        <div>
            <p style={{fontWeight: 'bold', fontSize: '18px'}}>{category.name}</p>
            <p style={{opacity: '0.6'}}></p>
        </div>
        <div style={{display: 'flex', gap: '0.5rem'}}>
            <p style={{opacity: '0.6'}}>From</p>
            <p style={{fontFamily: 'Kaushan Script, cursive', color: 'rgb(231, 75, 75)', fontWeight: 'bold'}}>$</p>
        </div>
        
    </div>
  )
}

export default TourCard