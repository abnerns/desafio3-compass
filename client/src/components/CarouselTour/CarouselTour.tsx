import { useEffect, useState } from "react";
import { TourTypes } from "../Tour/types";
import Tour from "../Tour/Tour";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const CarouselTour = () => {
    const [tours, setTours] = useState<TourTypes[]>([]);
    const [reviewCounts, setReviewCounts] = useState<{ [key: number]: number }>({});
    const navigate = useNavigate();
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2
    };

    useEffect(() => {
        fetch("http://localhost:8000/tours")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log("Dados recebidos do servidor:", data);
            setTours(data);
          })
          .catch((error) => console.error("Erro ao buscar dados:", error));

          fetch("http://localhost:8000/reviews/countByReview")
          .then((response) => response.json())
          .then((data) => {
            const counts: { [key: number]: number } = {};
            data.forEach((review: { idTour: number, count: number }) => {
              counts[review.idTour] = review.count;
            });
            setReviewCounts(counts);
          })
          .catch((error) => console.error("Erro ao buscar contagem de reviews:", error));
      }, []);
      
  return (
    <div style={{width: '76.8vw'}}> 
      <Slider {...settings}>
      {tours.map((tour) => (
        <div key={tour.id} onClick={() => navigate(`/tour-details/${tour.id}`)}>
          <Tour  tour={tour} reviewCount={reviewCounts[tour.id] || 0} />
        </div>
      ))}
      </Slider>
    </div>
  )
}

export default CarouselTour