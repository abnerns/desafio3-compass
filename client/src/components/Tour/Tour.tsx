import { Star } from "lucide-react"
import styles from "./Tour.module.css"
import { Heart } from "lucide-react"
import { useState } from "react"
import { TourProps } from "./types"

const Tour = (props: TourProps) => {
    const [like,setLike] = useState(false);
    const handleLike = () => {
        setLike(!like);
    }
    
  return (
    <div className={styles.container}>
        <div>
            <button className={styles.icon} onClick={handleLike}><Heart size={12} color={like ? "red" : "black"} fill={like ? "red" : "none"}/></button>
            <img className={styles.img} src={props.img} />
        </div>
        <div className={styles.infoBox}>
            <p>{props.place}</p>
            <h3 className={styles.tour1}>{props.name}</h3>
            <div className={styles.bottom}>
                <div className={styles.review}>
                    <span className={styles.star}><Star size={12} fill="white"/><span>4,8</span></span>
                    <p>{props.review}</p>
                </div>
                <p>{props.time}</p>
            </div>
            <span className={styles.hr}/>
            <div className={styles.startPrice}>
                <p>Starting from</p>
                <p className={styles.price}>${props.price}</p>
            </div>
        </div>
    </div>
  )
}

export default Tour