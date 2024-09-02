import { FaRegHeart } from "react-icons/fa"
import { FiShare2 } from "react-icons/fi"
import { GrLocation } from "react-icons/gr"
import styles from "./TourInfo.module.css"
import { TiStarFullOutline } from "react-icons/ti"
import AddReview from "../AddReview/AddReview"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Map from "../Map/Map"
import { TourTypes } from "../Tour/types"


const TourInfo = ({ tour, reviews }: { tour: TourTypes }) => {
  const { id: tourId } = useParams<{ id: string }>();
  const [avgRatings, setAvgRatings] = useState({
    services: 0,
    price: 0,
    location: 0,
    food: 0,
    amenities: 0,
    comfort: 0
  });
  const filteredReviews = reviews.filter((review) => review.idTour === Number(tourId));

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


    return (
      <div className={styles.body}>
        <div style={{ display: 'flex', paddingTop: '1rem', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <GrLocation size={24} />
            <span style={{ display: 'flex', gap: '1rem' }}>
              <p>{tour.city}, {tour.destinationName}</p>
              <p style={{ color: '#FC5056' }}>View on map</p>
            </span>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <FiShare2 size={22} />
            <FaRegHeart size={22} />
          </div>
        </div>
        <p style={{ fontSize: '32px', fontWeight: 'bold' }}>{tour.name}</p>
        <span style={{height: '1px', background: 'black', width: '100%', opacity: '0.2'}}></span>
        <div className={styles.info}>
            <div className={styles.infoBox}>
                <span>From</span>
                <p style={{color: '#dd464b'}}>${tour.price}</p>
            </div>
            <div>
                <span>Duration</span>
                <p>{tour.duration} days</p>
            </div>
            <div>
                <span>Max People</span>
                <p>{tour.maxPeople}</p>
            </div>
            <div>
                <span>Min Age</span>
                <p>{tour.minAge}+</p>
            </div>
            <div>
                <span>Tour Type</span>
                <p>{tour.categoryName}</p>
            </div>
            <div>
                <span>Reviews</span>
                <div style={{display: 'flex', gap: '0.2rem', alignItems: 'center'}}><TiStarFullOutline color="#dd464b" /><p style={{display: 'flex', gap: '0.2rem'}}>{globalAverage}<span style={{fontWeight: 'normal' }}>({filteredReviews.length} reviews)</span></p></div>
            </div>
        </div>
        <div>
            <p className={styles.title}>Overview</p>
            <p>Istanbul, the vibrant and historic city straddling the continents of Europe and Asia, offers an enchanting blend of cultures, sights, and experiences that captivate every traveler’s heart. As Turkey’s cultural and economic hub. Instabul seamlesly fuses its rich heritage with modernity, creating an unforgettable journey for visitors.</p>
        </div>
        <div>
            <p className={styles.title}>Map</p>
            <Map city={tour.city} country={tour.country} />
        </div>
        <div>
            <p className={styles.title}>Average Reviews</p>
            <AddReview />
        </div>
    </div>
  )
}

export default TourInfo