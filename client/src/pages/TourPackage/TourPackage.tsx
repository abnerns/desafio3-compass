import { FaSortAlphaDown } from "react-icons/fa";
import Filters from "../../components/Filters/Filters";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./TourPackage.module.css";
import { Form } from "react-bootstrap";
import { FaAngleDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { TourType } from "../../components/Filters/types";
import Tour from "../../components/Tour/Tour";
import { useNavigate } from 'react-router-dom';

const TourPackage = () => {
  const [tours, setTours] = useState<TourType[]>([]);
  const [limit] = useState(3);
  const [offset, setOffset] = useState(0);
  const [reviewCounts, setReviewCounts] = useState<{ [key: number]: number }>({});
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [totalTour, setTotalTour] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const url = new URL("http://localhost:8000/tours");
    url.searchParams.append("limit", limit.toString());
    url.searchParams.append("offset", offset.toString());
    if (selectedCategory !== null) {
      url.searchParams.append("idCateg", selectedCategory.toString());
    }

    fetch(url.toString())
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados recebidos do servidor.", data);
        setTours(data);
      })
      .catch((error) => console.error("Erro ao buscar dados.", error));

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

      fetch("http://localhost:8000/tours/total")
      .then((response) => response.json())
      .then((data) => {
        setTotalTour(data.count);
      })
      .catch((error) => console.error("Erro ao buscar contagem total de tours:", error));
  }, [limit, offset, selectedCategory]);



  return (
    <div>
      <Header />
      <div className={styles.body}>
        <div className={styles.homeHeader}>
          <p
            style={{
              fontFamily: "Work Sans",
              fontWeight: "bold",
              fontSize: "56px",
              margin: "0",
            }}
          >
            Tour Package
          </p>
          <span
            style={{
              fontWeight: "500",
              display: "flex",
              gap: "0.5rem",
              fontSize: "18px",
            }}
          >
            <p>Home /</p>
            <p style={{ color: "#FC5056" }}>Tour Package</p>
          </span>
          <SearchBar />
        </div>
        <div className={styles.main}>
          <Filters onCategoryChange={setSelectedCategory} />
          <div className={styles.packages}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ margin: "0" }}>{totalTour} Tours</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.7rem",
                  opacity: "0.7",
                }}
              >
                <p style={{ margin: "0" }}>Sort by</p>
                <FaSortAlphaDown size={22} />
                <Form className="d-flex align-items-center">
                  <div className={styles.input}>
                    <input
                      type="title"
                      placeholder="Title"
                      style={{ backgroundColor: "#F7F8FA" }}
                    ></input>
                    <FaAngleDown size={24} />
                  </div>
                </Form>
              </div>
            </div>
            <div className={styles.content}>
              {tours.map((tour) => (
                <div key={tour.id} onClick={() => navigate(`/tour-details/${tour.id}`)}>
                  <Tour  tour={tour} reviewCount={reviewCounts[tour.id] || 0} />
                </div>
              ))}
            </div>
            <div className={styles.pagination}>
              <button onClick={() => setOffset(Math.max(0, offset - limit))} disabled={offset === 0}>Anterior</button>
              <button onClick={() => setOffset(offset + limit)} disabled={tours.length < limit}>Próximo</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TourPackage;
