import { FaStar } from "react-icons/fa";
import styles from "./Stars.module.css";
import { useState } from "react";

const Stars = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1;
        return (
          <label key={currentRating}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => setRating(currentRating)}
            />
            <FaStar
              className={styles.star}
              color={currentRating <= (hover || rating) ? "#FFC107" : "#A9AFBB"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Stars;
