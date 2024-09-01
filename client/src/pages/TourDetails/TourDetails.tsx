import BookTour from "../../components/BookTour/BookTour"
import CarouselTour from "../../components/CarouselTour/CarouselTour"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import TourInfo from "../../components/TourInfo/TourInfo"
import styles from "./TourDetails.module.css"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TourType } from '../../components/Filters/types';

const TourDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [tour, setTour] = useState<TourType | null>(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/tours/${id}`)
      .then(response => response.json())
      .then(data => setTour(data))
      .catch(error => console.error('Erro ao buscar detalhes do tour:', error));

      fetch("http://localhost:8000/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Erro ao buscar reviews:", error));
  }, [id]);

  if (!tour) return <p>Carregando...</p>;

  return (
    <div>
      <Header />
        <div className={styles.body}>
          <div className={styles.main}>
            <img src="https://3challenge-compass.s3.us-east-2.amazonaws.com/vernazza.jpg" alt="static-tour" style={{width: '100%'}} />
            <TourInfo tour={tour} reviews={reviews} />
          </div>
          <div className={styles.aside}>
            <BookTour />
          </div>
        </div>
        <div className={styles.bottom}>
          <p style={{fontSize: '40px', fontWeight: 'bold', marginBottom: '3rem'}}>You may also like...</p>
          <CarouselTour />
        </div>     
      <Footer />
    </div>
  )
}

export default TourDetails