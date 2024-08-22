import styles from "./TourCard.module.css"
import { TourCardProps } from "./types"

const TourCard = (props: TourCardProps) => {
  return (
    <div className={styles.card}>
        <span className={styles.circle}>{props.icon}</span> {/* size={36} */}
        <div>
            <p style={{fontWeight: 'bold', fontSize: '18px'}}>{props.type}</p>
            <p style={{opacity: '0.6'}}>{props.quantity}</p>
        </div>
        <div style={{display: 'flex', gap: '0.5rem'}}>
            <p style={{opacity: '0.6'}}>From</p>
            <p style={{fontFamily: 'Kaushan Script, cursive', color: 'rgb(231, 75, 75)', fontWeight: 'bold'}}>${props.price}</p>
        </div>
        
    </div>
  )
}

export default TourCard