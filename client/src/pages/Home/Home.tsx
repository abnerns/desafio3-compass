import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css"

function Home() {
  

  return (
    <div className={styles.body}>
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
