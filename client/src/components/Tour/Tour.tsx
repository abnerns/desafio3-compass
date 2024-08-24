import { Star } from "lucide-react"
import styles from "./Tour.module.css"
import { Heart } from "lucide-react"
import { useEffect, useState } from "react"
import { TourTypes } from "./types"
import axios from "axios"

const Tour = () => {
    const [like,setLike] = useState(false);
    const handleLike = () => {
        setLike(!like);
    }

    const [tours, setTours] = useState<TourTypes[]>([]);
    useEffect(() => {
        axios
            .get('http://localhost:8000/tours')
            .then((res) => {
                setTours(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    
  return (
    <div className={styles.container}>
        <div>
            <button className={styles.icon} onClick={handleLike}><Heart size={12} color={like ? "red" : "black"} fill={like ? "red" : "none"}/></button>
            <img className={styles.img} src="https://images.pexels.com/photos/17741532/pexels-photo-17741532/free-photo-of-a-rocky-cliff-by-the-sea.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </div>
        {tours.map((tour, index) => (
            <div key={tour._id} className={styles.infoBox}>
            <p>{tour.city}</p>
            <p>{tour.country}</p>
            <h3 className={styles.tour1}>{tour.name}</h3>
            <div className={styles.bottom}>
                <div className={styles.review}>
                    <span className={styles.star}><Star size={12} fill="white"/><span>4,8</span></span>
                    <p>{tour.review}</p>
                </div>
                <p>{tour.duration}</p>
            </div>
            <span className={styles.hr}/>
            <div className={styles.startPrice}>
                <p>Starting from</p>
                <p className={styles.price}>$550</p>
            </div>
        </div>
        ))}
    </div>
  )
}

export default Tour