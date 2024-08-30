import { Star } from "lucide-react"
import styles from "./ShowReview.module.css"
import { useEffect, useState } from "react";

interface Review {
    id: number;
    user_name: string;
    user_email: string;
    message: string;
    services: number;
    price: number;
    location: number;
    food: number;
    amenities: number;
    comfort: number;
}

const ShowReview = () => {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
          try {
            const response = await fetch("http://localhost:8000/reviews");
            const data = await response.json();
            setReviews(data);
          } catch (error) {
            console.error("Error fetching reviews:", error);
          }
        };
    
        fetchReviews();
      }, []);

  return (
    <div>
      <p className={styles.title}>Showing {reviews.length} review(s)</p>
      {reviews.map((review) => (
        <div key={review.id} className={styles.review}>
          <img
            src="https://3challenge-compass.s3.us-east-2.amazonaws.com/profile-icon.jpg"
            alt="user-profile"
            style={{ alignSelf: "flex-start" }}
          />
          <div className={styles.content}>
            <p style={{ opacity: "0.6", fontSize: "14px" }}>March 20, 2022</p>
            <p className={styles.title}>{review.user_name}</p>
            <div className={styles.avgReview}>
              <span className={styles.star}>
                <Star size={12} fill="white" />
                <span>{review.services}</span>
              </span>
              <p style={{ opacity: "0.6", fontSize: "14px" }}>15 reviews</p>
            </div>
            <p>{review.message}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ShowReview