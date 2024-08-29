import AverageReview from "./AverageReview/AverageReview"
import ShowReview from "./ShowReview/ShowReview"
import styles from "./AddReview.module.css"
import { Col, Row, Form } from "react-bootstrap"
import Stars from "./Stars/Stars"

const AddReview = () => {
  return (
    <div className={styles.container}>
        <AverageReview />
        <ShowReview />
        <Form className={styles.form}>
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
                    <Form.Control placeholder="Your name" className={styles.input} />
                </Col>
                <Col>
                    <Form.Control type="email" placeholder="Email address" className={styles.input} />
                </Col>
            </Row>
            <Form.Control as="textarea" rows={3} placeholder="Write your comment" className={styles.textarea} />
            <button className={styles.button}>Submit review</button>
        </Form>
    </div>
  )
}

export default AddReview