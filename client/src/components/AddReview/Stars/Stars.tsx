import { FaStar } from "react-icons/fa";
import styles from "./Stars.module.css";
import { useState } from "react";

interface StarsProps {
  rating: number;
  onRatingChange: (rating: number) => void;
}

const Stars: React.FC<StarsProps> = ({ rating, onRatingChange }) => {
  const [hover, setHover] = useState<number | null>(null);

  const handleClick = (currentRating: number) => {
    onRatingChange(currentRating);
  };

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
              onClick={() => handleClick(currentRating)}
              style={{ display: "none" }} // esconder o input de radio
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
