import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Tour from "../../components/Tour/Tour";
import { TourTypes } from "../../components/Tour/types";
import styles from "./Home.module.css";
import { useState, useEffect } from "react";

function Home() {
  const [tours, setTours] = useState<TourTypes[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Dados recebidos do servidor:", data);
        setTours(data);
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  return (
    <div className={styles.body}>
      <Header />
      <div style={{ display: "flex" }}>
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
