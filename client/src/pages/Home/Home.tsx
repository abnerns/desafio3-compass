import CarouselTour from "../../components/CarouselTour/CarouselTour";
import CarouselCategory from "../../components/CategoryCarousel/CarouselCategory";
import styles from "./Home.module.css";

function Home() {
  

 

  return (
    <div className={styles.body}>
      <CarouselTour />
      <CarouselCategory />
    </div>
  );
}

export default Home;
