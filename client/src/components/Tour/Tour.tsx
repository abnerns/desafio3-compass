import { Star } from "lucide-react";
import { Heart } from "lucide-react";
import { useState } from "react";
import styles from "./Tour.module.css";
import { TourProps } from "./types";

const Tour: React.FC<TourProps> = ({ tour }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <div className={styles.container}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} alt={tour.name} src="https://3challenge-compass.s3.us-east-2.amazonaws.com/rocky.jpeg" />
            <button className={styles.icon} onClick={handleLike}>
            <Heart size={12} color={like ? "red" : "black"} fill={like ? "red" : "none"} />
            </button>
        </div>
        <div className={styles.infoBox}>
            <p>
            {tour.city}, {tour.country}
            </p>
            <h3 style={{ width: "15vw", fontSize: "18px", fontWeight: "bold" }}>{tour.name}</h3>
            <div className={styles.bottom}>
            <div className={styles.review}>
                <span className={styles.star}>
                <Star size={12} fill="white" />
                <span>{tour.avgReview}</span>
                </span>
                <p>10+ reviews</p>
            </div>
            <p>{tour.duration} days</p>
            </div>
            <span className={styles.hr} />
            <div className={styles.startPrice}>
            <p>Starting from</p>
            <p className={styles.price}>${tour.price}</p>
            </div>
        </div>
    </div>
  );
};

export default Tour;
