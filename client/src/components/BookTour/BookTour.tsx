import { useEffect, useState } from "react";
import styles from "./BookTour.module.css";
import { Container, Form } from "react-bootstrap";
import { CiCalendar } from "react-icons/ci";
import { FaAngleDown, FaMinus, FaPlus } from "react-icons/fa";
import { TourType } from "../Filters/types";
import { useParams } from "react-router-dom";

const BookTour = () => {
  const { id } = useParams<{ id: string }>();
  const [tour, setTour] = useState<TourType | null>(null);
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const [children, setChildren] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:8000/tours/${id}`)
      .then((response) => response.json())
      .then((data) => setTour(data))
      .catch((error) => console.error("Erro ao buscar detalhes do tour:", error));
  }, [id]);

  useEffect(() => {
    if (tour) {
      const newTotalPrice = (adults + kids + children) * tour.price;
      setTotalPrice(newTotalPrice);
    }
  }, [adults, kids, children, tour]);

  const incrementAdults = () => setAdults(adults + 1);
  const decrementAdults = () => setAdults(Math.max(1, adults - 1));
  const incrementKids = () => setKids(kids + 1);
  const decrementKids = () => setKids(Math.max(0, kids - 1));
  const incrementChildren = () => setChildren(children + 1);
  const decrementChildren = () => setChildren(Math.max(0, children - 1));

  return (
    <div className={styles.container}>
      <span style={{ display: "flex", alignItems: "flex-end", gap: "0.5rem" }}>
        <p style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "0.5rem" }}>
          ${tour?.price}
        </p>
        <p>/ per person</p>
      </span>
      <span
        style={{ height: "1px", background: "black", width: "100%", opacity: "0.2" }}
      ></span>
      <Container className={styles.box}>
        <p className={styles.subtitle}>Date</p>
        <Form className="d-flex align-items-center">
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Choose date"
              style={{ backgroundColor: "#F7F8FA" }}
            />
            <CiCalendar size={24} />
          </div>
        </Form>
      </Container>
      <Container className={styles.box}>
        <p className={styles.subtitle}>Time</p>
        <Form className="d-flex align-items-center">
          <div className={styles.input}>
            <input
              type="text"
              placeholder="Select"
              style={{ backgroundColor: "#F7F8FA" }}
            />
            <FaAngleDown size={24} />
          </div>
        </Form>
      </Container>
      <Container>
        <div>
          <p className={styles.subtitle}>Ticket</p>
        </div>
        <Form className={styles.ticketForm}>
          <p>Adults (18+ years)</p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button type="button" onClick={decrementAdults} className={styles.ticketCheck}>
              <FaMinus />
            </button>
            <div className={styles.ticketCheck} style={{ fontWeight: "600" }}>
              {adults}
            </div>
            <button type="button" onClick={incrementAdults} className={styles.ticketCheck}>
              <FaPlus />
            </button>
          </div>
        </Form>
        <Form className={styles.ticketForm}>
          <p>Kids (12+ years)</p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button type="button" onClick={decrementKids} className={styles.ticketCheck}>
              <FaMinus />
            </button>
            <div className={styles.ticketCheck} style={{ fontWeight: "600" }}>
              {kids}
            </div>
            <button type="button" onClick={incrementKids} className={styles.ticketCheck}>
              <FaPlus />
            </button>
          </div>
        </Form>
        <Form className={styles.ticketForm}>
          <p>Children (3+ years)</p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button type="button" onClick={decrementChildren} className={styles.ticketCheck}>
              <FaMinus />
            </button>
            <div className={styles.ticketCheck} style={{ fontWeight: "600" }}>
              {children}
            </div>
            <button type="button" onClick={incrementChildren} className={styles.ticketCheck}>
              <FaPlus />
            </button>
          </div>
        </Form>
      </Container>
      <span
        style={{ height: "1px", background: "black", width: "100%", opacity: "0.2" }}
      ></span>
      <div>
        <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ opacity: "0.7" }}>Total</p>
          <p style={{ color: "#FC5056", fontSize: "24px", fontWeight: "bold" }}>
            ${totalPrice}
          </p>
        </span>
      </div>
      <button className={styles.button}>Book now</button>
    </div>
  );
};

export default BookTour;
