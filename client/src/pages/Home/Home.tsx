import { GiCheckMark } from "react-icons/gi";
import CarouselTour from "../../components/CarouselTour/CarouselTour";
import CarouselCategory from "../../components/CategoryCarousel/CarouselCategory";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./Home.module.css";
import { RiDoubleQuotesR } from "react-icons/ri";
import { VscPlayCircle } from "react-icons/vsc";
import TourDestination from "../../components/TourDestination/TourDestination";

function Home() {

  return (
    <div>
      <Header />
      <div className={styles.body}>
        <div className={styles.homeHeader}>
          <p style={{fontFamily: 'Kaushan Script', fontSize: '32px', color: '#FC5056'}}>Save 15% off in Worldwide</p>
          <p style={{fontFamily: 'Work Sans', fontWeight: 'bold', fontSize: '56px'}}>Travel & Adventures</p>
          <p style={{fontWeight: '500'}}>Find awesome hotel, tour, car and activities in London</p>
          <SearchBar />
        </div>
        <div style={{display: 'flex', alignItems: 'center', flexFlow: 'column', marginTop: '5rem'}}>
          <p className={styles.subtitle}>Tours</p>
          <p className={styles.title}>Most Popular Tours</p>
          <CarouselTour />
        </div>
        <span style={{height: '1px', background: 'black', width: '75%', opacity: '0.2'}}></span>
        <div style={{display: 'flex', gap: '6rem'}}>
          <div className={styles.static1}><p style={{fontSize: '40px', fontFamily: 'Kaushan Script'}}>120+</p><p className={styles.static1_text}>Total Destination</p></div>
          <div className={styles.static1}><p style={{fontSize: '40px', fontFamily: 'Kaushan Script'}}>500+</p><p className={styles.static1_text}>Travel Package</p></div>
          <div className={styles.static1}><p style={{fontSize: '40px', fontFamily: 'Kaushan Script'}}>12k</p><p className={styles.static1_text}>Total Travelers</p></div>
          <div className={styles.static1}><p style={{fontSize: '40px', fontFamily: 'Kaushan Script'}}>7k</p><p className={styles.static1_text}>Positive Reviews</p></div>
        </div>
        <div className={styles.destination}>
          <p className={styles.subtitle}>Destination</p>
          <p style={{fontFamily: 'Work Sans', fontWeight: 'bold', fontSize: '40px', marginBottom: '3rem'}}>Top Attractions Destination</p>
          <div className={styles.grid}>
                <figure className={styles.gridItem} style={{gridColumn: '1 / 4'}} >
                  <TourDestination />
                </figure>
                <figure className={styles.gridItem} style={{gridColumn: '4 / 7'}}>
                  <TourDestination />
                </figure>
                <figure className={styles.gridItem} style={{gridColumn: '7 / 10'}}>
                  <TourDestination />
                </figure>
                <figure className={styles.gridItem} style={{gridRow: '1 / 3', gridColumn: '10 / 13'}}>
                  <TourDestination />
                </figure>
                <figure className={styles.gridItem} style={{gridColumn: '1 / 5'}} >
                  <TourDestination />
                </figure>
                <figure className={styles.gridItem} style={{gridColumn: '5 / 10'}}>
                  <TourDestination />
                </figure>
          </div>
        </div>
        <div className={styles.experiences}>
          <div>
            <img src="https://3challenge-compass.s3.us-east-2.amazonaws.com/rocky.jpeg" alt="rocky" style={{width: '310px', height: '374px', zIndex: '-10', rotate: '-15deg', position: 'absolute', left: '180px'}} />
            <div style={{position: 'relative'}}>
              <img src="https://3challenge-compass.s3.us-east-2.amazonaws.com/rocky.jpeg" alt="rocky" style={{width: '334px', height: '424px', border: '3px solid white', marginTop: '5rem'}} />
              <p className={styles.expBtn}><VscPlayCircle /> Watch Now</p>
            </div>
          </div>
          <div className={styles.expChoose}>
            <p className={styles.subtitle}>Why Choose Us</p>
            <p className={styles.title}>Our Experiences Meet High Quality Standards</p>
            <p>Holisticly optimize proactive strategic theme areas rather than effective manufactured products create.</p>
            <div style={{display: 'flex', flexFlow: 'wrap', gap: '1rem', width: '364px', justifyContent: 'space-between'}}>
              <p style={{fontWeight: 'bold'}}><GiCheckMark color="#FC5056" /> Travel Plan</p>
              <p style={{fontWeight: 'bold'}}><GiCheckMark color="#FC5056" /> Cheap Rates</p>
              <p style={{fontWeight: 'bold'}}><GiCheckMark color="#FC5056" /> Hand-picked Tour</p>
              <p style={{fontWeight: 'bold'}}><GiCheckMark color="#FC5056" /> Private Guide</p>
            </div>
            <p style={{border: '1px solid lightgrey', width: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px', padding: '0.75rem', fontWeight: '600', marginTop: '1rem'}}>Contact Us</p>
          </div>
        </div>
        <span style={{height: '1px', background: 'black', width: '75%', opacity: '0.2'}}></span>
        <div style={{display: 'flex', alignItems: 'center', flexFlow: 'column'}}>
          <p className={styles.subtitle}>Browse By Category</p>
          <p className={styles.title} style={{marginBottom: '2rem'}}>Pick a Tour Type</p>
          <CarouselCategory />
        </div>
        <div className={styles.testimonials}>
          <div style={{position: 'relative'}}>
            <img style={{width: '336px', height: '221px', rotate: '-10deg', marginTop: '4rem'}} src="https://3challenge-compass.s3.us-east-2.amazonaws.com/rocky.jpeg" />
            <img style={{width: '218px', height: '127px', rotate: '8deg', position: 'absolute', left: '50px', top: '-40px', border: '4px solid white'}} src="https://3challenge-compass.s3.us-east-2.amazonaws.com/rocky.jpeg" />
            <img style={{width: '197px', height: '134px', rotate: '6deg', position: 'absolute', left: '70px', bottom: '-40px', border: '4px solid white' }} src="https://3challenge-compass.s3.us-east-2.amazonaws.com/rocky.jpeg" />
          </div>
          <div className={styles.testBox}>
            <p className={styles.subtitle}>Testimonials</p>
            <p className={styles.title} style={{marginBottom: '0'}}>What Travelers Say</p>
            <RiDoubleQuotesR size={36} color="#FC5056" />
            <p style={{fontSize: '18px', fontWeight: 'bold', textAlign: 'center'}}>“The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app.”  </p>
            <p style={{opacity: '0.6'}}>-By Molie Rosa, Photographer</p>
          </div>
        </div>
        <div className={styles.updates}>
            <p className={styles.subtitle}>Updates</p>
            <p className={styles.title}>Latest Travel Guide</p>
            <div style={{width: '1092px', height:'312px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
              <div className={styles.updatesBox}>
                <img src="https://3challenge-compass.s3.us-east-2.amazonaws.com/rocky.jpeg" style={{width: '300px', height: '136px'}} />
                <div style={{margin: '1rem'}}>
                  <span style={{display: 'flex', gap: '2rem', opacity: '0.6'}}><p>July 13, 2023</p><p>• Admin</p></span>
                  <p style={{fontWeight: 'bold', fontSize: '18px'}}>The Impact of Covid-19 on travel & tourism industry</p>
                </div>
              </div>
              <div className={styles.updatesBox}>
                <img src="https://3challenge-compass.s3.us-east-2.amazonaws.com/rocky.jpeg" style={{width: '300px', height: '136px'}} />
                <div style={{margin: '1rem'}}>
                  <span style={{display: 'flex', gap: '2rem', opacity: '0.6'}}><p>July 13, 2023</p><p>• Admin</p></span>
                  <p style={{fontWeight: 'bold', fontSize: '18px'}}>The Impact of Covid-19 on travel & tourism industry</p>
                </div>
              </div>
              <div className={styles.updatesBox}>
                <img src="https://3challenge-compass.s3.us-east-2.amazonaws.com/rocky.jpeg" style={{width: '300px', height: '136px'}} />
                <div style={{margin: '1rem'}}>
                  <span style={{display: 'flex', gap: '2rem', opacity: '0.6'}}><p>July 13, 2023</p><p>• Admin</p></span>
                  <p style={{fontWeight: 'bold', fontSize: '18px'}}>The Impact of Covid-19 on travel & tourism industry</p>
                </div>
              </div>
              <div className={styles.updatesBox}>
                <img src="https://3challenge-compass.s3.us-east-2.amazonaws.com/rocky.jpeg" style={{width: '300px', height: '136px'}} />
                <div style={{margin: '1rem'}}>
                  <span style={{display: 'flex', gap: '2rem', opacity: '0.6'}}><p>July 13, 2023</p><p>• Admin</p></span>
                  <p style={{fontWeight: 'bold', fontSize: '18px'}}>The Impact of Covid-19 on travel & tourism industry</p>
                </div>
              </div>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
