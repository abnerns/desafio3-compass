import React, { useState, useEffect } from "react";
import AverageReview from "./AverageReview/AverageReview";
import ShowReview from "./ShowReview/ShowReview";
import styles from "./AddReview.module.css";
import { Col, Row, Form } from "react-bootstrap";
import Stars from "./Stars/Stars";

const AddReview = () => {
  const [reviews, setReviews] = useState([]);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const [ratings, setRatings] = useState({
    services: 0,
    location: 0,
    amenities: 0,
    price: 0,
    comfort: 0,
    food: 0
  });

  useEffect(() => {
    fetch("http://localhost:8000/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Erro ao buscar reviews:", error));
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = (category: string, rating: number) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: rating,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  
    const dataToSend = {
      ...formData,
      ...ratings,
    };
  
    fetch("http://localhost:8000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    })
      .then((response) => {
        const contentType = response.headers.get("Content-Type");
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(text || `HTTP error! status: ${response.status}`);
          });
        }
  
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        } else {
          return response.text();
        }
      })
      .then((data) => {
        if (typeof data === "string") {
          console.log(data);
        } else {
          setReviews((prevReviews) => [...prevReviews, data]);
        }
  
        setFormData({
          user_name: "",
          user_email: "",
          message: ""
        });
  
        setRatings({
          services: 0,
          location: 0,
          amenities: 0,
          price: 0,
          comfort: 0,
          food: 0
        });
      })
      .catch((error) => console.error("Erro ao enviar review:", error));
  };

  return (
    <div className={styles.container}>
      <AverageReview />
      <ShowReview reviews={reviews} />
      <Form className={styles.form} onSubmit={handleSubmit}>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>Add a review</p>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="services">
            <Form.Label>Services</Form.Label>
            <Stars
                rating={ratings.services}
                onRatingChange={(rating) => handleRatingChange("services", rating)}
            />
            </Form.Group>
            <Form.Group as={Col} controlId="locations">
            <Form.Label>Locations</Form.Label>
            <Stars
                rating={ratings.location}
                onRatingChange={(rating) => handleRatingChange("location", rating)}
            />
            </Form.Group>
            <Form.Group as={Col} controlId="amenities">
            <Form.Label>Amenities</Form.Label>
            <Stars
                rating={ratings.amenities}
                onRatingChange={(rating) => handleRatingChange("amenities", rating)}
            />
            </Form.Group>
            <Form.Group as={Col} controlId="prices">
            <Form.Label>Prices</Form.Label>
            <Stars
                rating={ratings.price}
                onRatingChange={(rating) => handleRatingChange("price", rating)}
            />
            </Form.Group>
        </Row>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="comfort">
            <Form.Label>Room comfort and quality</Form.Label>
            <Stars
                rating={ratings.comfort}
                onRatingChange={(rating) => handleRatingChange("comfort", rating)}
            />
            </Form.Group>
            <Form.Group as={Col} controlId="food">
            <Form.Label>Food</Form.Label>
            <Stars
                rating={ratings.food}
                onRatingChange={(rating) => handleRatingChange("food", rating)}
            />
            </Form.Group>
        </Row>
        <Row>
            <Col>
            <Form.Control
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                placeholder="Your name"
                className={styles.input}
            />
            </Col>
            <Col>
            <Form.Control
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
                placeholder="Email address"
                className={styles.input}
            />
            </Col>
        </Row>
        <Form.Control
            as="textarea"
            rows={3}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Write your comment"
            className={styles.textarea}
        />
        <button type="submit" className={styles.button}>
            Submit review
        </button>
        </Form>
    </div>
  );
};

export default AddReview;
