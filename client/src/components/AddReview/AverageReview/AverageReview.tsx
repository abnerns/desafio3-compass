import { FaStar } from "react-icons/fa"
import styles from "./AverageReview.module.css"
import { ProgressBar } from "react-bootstrap"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AverageReview = () => {
  const { id: tourId } = useParams<{ id: string }>();
  const [avgRatings, setAvgRatings] = useState({
    services: 0,
    price: 0,
    location: 0,
    food: 0,
    amenities: 0,
    comfort: 0
  });

  useEffect(() => {
    if (tourId) {
      fetch(`http://localhost:8000/reviews/avgReviews/${tourId}`)
        .then(response => response.json())
        .then(data => {
          console.log("Received data:", data);
          setAvgRatings(data);
        })
        .catch(error => console.error("Erro ao buscar média dos reviews:", error));
    }
  }, [tourId]);

  const globalAverage = ((avgRatings.services + avgRatings.price + avgRatings.location + avgRatings.food + avgRatings.amenities + avgRatings.comfort) / 6).toFixed(1);

  const getDescription = (average: number) => {
    if (average >= 1.0 && average < 2.0) return "Poor";
    if (average >= 2.0 && average < 3.0) return "Average";
    if (average >= 3.0 && average < 4.0) return "Good";
    if (average >= 4.0) return "Excellent";
    return "No Rating";
  };

  return (
    <div>
        <div className={styles.container}>
            <div className={styles.avgBox}>
                <p style={{fontWeight: 'bold', fontSize: '56px', margin: '0'}}>{globalAverage}</p>
                <span style={{display: 'flex', alignItems: 'center', gap: '0.4rem'}}><FaStar color="white" /><p style={{margin: '0'}}>{getDescription(Number(globalAverage))}</p></span>
            </div>
            <div className={styles.reviewBox}>
                <div><p>Services</p><span><ProgressBar variant="danger" now={60} style={{width: '202px', height: '8px'}} /><p>{avgRatings.services.toFixed(1)}</p></span></div>
                <div><p>Prices</p><span><ProgressBar variant="danger" now={60} style={{width: '202px', height: '8px'}} /><p>{avgRatings.price.toFixed(1)}</p></span></div>
                <div><p>Locations</p><span><ProgressBar variant="danger" now={60} style={{width: '202px', height: '8px'}} /><p>{avgRatings.location.toFixed(1)}</p></span></div>
                <div><p>Food</p><span><ProgressBar variant="danger" now={60} style={{width: '202px', height: '8px'}} /><p>{avgRatings.food.toFixed(1)}</p></span></div>
                <div><p>Amenities</p><span><ProgressBar variant="danger" now={60} style={{width: '202px', height: '8px'}} /><p>{avgRatings.amenities.toFixed(1)}</p></span></div>
                <div><p>Room comfort and quality</p><span><ProgressBar variant="danger" now={60} style={{width: '202px', height: '8px'}} /><p>{avgRatings.comfort.toFixed(1)}</p></span></div>
            </div>
        </div>
    </div>
    
  )
}

export default AverageReview