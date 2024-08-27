import BookTour from "../../components/BookTour/BookTour"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import styles from "./TourDetails.module.css"

const TourDetails = () => {
  return (
    <div>
      <Header />
        <div className={styles.body}>
          <div className={styles.main}>
            <img src="https://3challenge-compass.s3.us-east-2.amazonaws.com/vernazza.jpg" alt="static-tour" style={{width: '100%'}} />
          </div>
          <div className={styles.aside}>
            <BookTour />
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default TourDetails