import AverageReview from "./AverageReview/AverageReview"
import ShowReview from "./ShowReview/ShowReview"
import styles from "./AddReview.module.css"
import { Col, Row, Form } from "react-bootstrap"
import Stars from "./Stars/Stars"
import { useState } from "react"

const AddReview = () => {
    const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const [services, setServices] = useState(0);
  const [price, setPrice] = useState(0);
  const [location, setLocation] = useState(0);
  const [food, setFood] = useState(0);
  const [amenities, setAmenities] = useState(0);
  const [comfort, setComfort] = useState(0);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const reviewData = {
      user_name: userName,
      user_email: userEmail,
      message,
      services,
      price,
      location,
      food,
      amenities,
      comfort,
    };

    try {
      const response = await fetch("http://localhost:8000/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reviewData),
      });

      if (response.ok) {
        console.log("Review submitted successfully");
        // Reset form fields or handle success state as needed
      } else {
        console.error("Failed to submit review");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className={styles.container}>
        <AverageReview />
        <ShowReview />
        <Form className={styles.form} onSubmit={handleSubmit}>
            <p style={{fontSize: '18px', fontWeight: 'bold'}}>Add a review</p>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="services">
                    <Form.Label>Services</Form.Label>
                    <Stars />
                </Form.Group>
                <Form.Group as={Col} controlId="locations">
                    <Form.Label>Locations</Form.Label>
                    <Stars />
                </Form.Group>
                <Form.Group as={Col} controlId="amenities">
                    <Form.Label>Amenities</Form.Label>
                    <Stars />
                </Form.Group>
                <Form.Group as={Col} controlId="prices">
                    <Form.Label>Prices</Form.Label>
                    <Stars />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="services">
                    <Form.Label>Room comfort and quality</Form.Label>
                    <Stars />
                </Form.Group>
                <Form.Group as={Col} controlId="locations">
                    <Form.Label>Food</Form.Label>
                    <Stars />
                </Form.Group>
            </Row>
            <Row>
            <Col>
                <Form.Control
                placeholder="Your name"
                className={styles.input}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                />
            </Col>
            <Col>
                <Form.Control
                type="email"
                placeholder="Email address"
                className={styles.input}
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                />
            </Col>
            </Row>
            <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your comment"
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className={styles.button}>
            Submit review
            </button>
        </Form>
    </div>
  )
}

export default AddReview