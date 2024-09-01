import { Star } from "lucide-react";
import styles from "./ShowReview.module.css";
import { ReviewProps } from "../types";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Rating } from "../../../types/Rating";

const ShowReview = ({ reviews }: ReviewProps) => {
  const { id: tourId } = useParams<{ id: string }>();
  const filteredReviews = reviews.filter((review) => review.idTour === Number(tourId));

const [averageRatings, setAverageRatings] = useState<{ [key: string]: Rating }>({});

useEffect(() => {
  if (tourId && filteredReviews.length > 0) {
    const fetchRatings = async () => {
      const ratingsData: { [key: string]: Rating } = {};
      await Promise.all(
        filteredReviews.map(async (review) => {
          const response = await fetch(`http://localhost:8000/reviews/rating/${tourId}/${review.user_email}`);
          const data = await response.json();
          ratingsData[review.user_email] = data;
        })
      );
      setAverageRatings(ratingsData);
    };

    fetchRatings().catch((error) => console.error("Erro ao buscar média dos reviews:", error));
  }
}, [tourId, filteredReviews]);


    return (
      <div>
        <p className={styles.title}>Showing {filteredReviews.length} review(s)</p>
        {filteredReviews.map((review) => {
          const formattedDate = new Date(review.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          });

          const reviewAverage = averageRatings[review.user_email];
          const average = reviewAverage ? ((reviewAverage.services + reviewAverage.price + reviewAverage.location + reviewAverage.food + reviewAverage.amenities + reviewAverage.comfort) / 6).toFixed(1): "0";
  
          return (
            <div className={styles.review} key={review.id}>
              <img
                src="https://3challenge-compass.s3.us-east-2.amazonaws.com/profile-icon.jpg"
                alt="user-profile"
                style={{ alignSelf: "flex-start" }}
              />
              <div className={styles.content}>
                <p style={{ opacity: "0.6", fontSize: "14px" }}>{formattedDate}</p>
                <p className={styles.title}>{review.user_name}</p>
                <div className={styles.avgReview}>
                  <span className={styles.star}>
                    <Star size={12} fill="white" />
                    <span>{average}</span>
                  </span>
                  <p style={{ opacity: "0.6", fontSize: "14px" }}>15 reviews</p>
                </div>
                <p>{review.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

export default ShowReview;
