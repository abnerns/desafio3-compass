import { Star } from "lucide-react";
import styles from "./ShowReview.module.css";
import { ReviewProps } from "../types";
import { useParams } from "react-router-dom";

const ShowReview = ({ reviews }: ReviewProps) => {
  const { id: tourId } = useParams<{ id: string }>();

  const filteredReviews = reviews.filter((review) => review.idTour === Number(tourId));

    return (
      <div>
        <p className={styles.title}>Showing {filteredReviews.length} review(s)</p>
        {filteredReviews.map((review) => {
        const formattedDate = new Date(review.created_at).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
  
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
                    <span></span>
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
