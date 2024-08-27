import BookTour from "../../components/BookTour/BookTour"
import CarouselTour from "../../components/CarouselTour/CarouselTour"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import TourInfo from "../../components/TourInfo/TourInfo"
import styles from "./TourDetails.module.css"

const TourDetails = () => {
  return (
    <div>
      <Header />
        <div className={styles.body}>
          <div className={styles.main}>
            <img src="https://3challenge-compass.s3.us-east-2.amazonaws.com/vernazza.jpg" alt="static-tour" style={{width: '100%'}} />
            <TourInfo />
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