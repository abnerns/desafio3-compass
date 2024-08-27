import { FaSortAlphaDown } from "react-icons/fa"
import Filters from "../../components/Filters/Filters"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import SearchBar from "../../components/SearchBar/SearchBar"
import styles from "./TourPackage.module.css"
import { Form } from "react-bootstrap"
import { FaAngleDown } from "react-icons/fa6"

const TourPackage = () => {

  return (
    <div>
        <Header />
        <div className={styles.body}>
          <div className={styles.homeHeader}>
            <p style={{fontFamily: 'Work Sans', fontWeight: 'bold', fontSize: '56px', margin: '0'}}>Tour Package</p>
            <span style={{fontWeight: '500', display: 'flex', gap: '0.5rem', fontSize: '18px'}}><p>Home /</p><p style={{color: '#FC5056'}}>Tour Package</p></span>
            <SearchBar />
          </div>
          <div className={styles.main}>
            <Filters />
            <div className={styles.packages}>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <p>16 Tours</p>
                <div style={{display: 'flex', alignItems: 'center', gap: '0.7rem', opacity: '0.7'}}>
                  <p style={{margin: '0'}}>Sort by</p>
                  <FaSortAlphaDown size={22} />
                  <Form className="d-flex align-items-center">
                    <div className={styles.input}>
                      <input type="title" placeholder="Title" style={{backgroundColor: '#F7F8FA'}}></input>
                      <FaAngleDown size={24} />
                    </div>
                  </Form>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default TourPackage