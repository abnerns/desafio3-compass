import { useState } from "react";
import styles from "./Filters.module.css"
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import NavButton from "../NavButton/NavButton";

const Filters = () => {
    const [priceFilter, setPriceFilter] = useState<number>(150);

    const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPriceFilter(Number(event.target.value));
    };

  return (
    <div className={styles.aside}>
              <Container className={styles.container}>
                <p className={styles.title}>Search</p>
                <Form className="d-flex align-items-center">
                    <div className={styles.input}>
                      <input type="type" placeholder="Type anything..." style={{width: '10.5vw'}}></input>
                      <CiSearch size={26} />
                    </div>
                    
                  </Form>
              </Container>
              <Container className={styles.container}>
                <p className={styles.title}>Filter by</p>
                <div className={styles.rangeContainer}>
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    value={priceFilter}
                    onChange={handlePrice}
                    className={styles.rangeSlider}
                  />
                  <div className={styles.price}>
                    <span>$0.00</span>
                    <span style={{fontWeight: 'bold'}}>${priceFilter.toFixed(2)}</span>
                  </div>
                </div>
                <NavButton value="Submit" />
              </Container>
              <Container className={styles.container}>
                <p className={styles.title}>Categories</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Adventure" />
                  <Form.Check type="checkbox" label="Beaches" />
                  <Form.Check type="checkbox" label="Boat Tours" />
                  <Form.Check type="checkbox" label="City Tours" />
                  <Form.Check type="checkbox" label="Food" />
                  <Form.Check type="checkbox" label="Hiking" />
                  <Form.Check type="checkbox" label="Honeymoon" />
                  <Form.Check type="checkbox" label="Museum Tours" />
                </Form.Group>
              </Container>
              <Container className={styles.container}>
                <p className={styles.title}>Destinations</p>
                <div>
                  <p className={styles.subtitle}>Africa</p>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Moroco" />
                    <Form.Check type="checkbox" label="Tanzania" />
                  </Form.Group>
                </div>
                <div>
                <p className={styles.subtitle}>Americas</p>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Argentina" />
                    <Form.Check type="checkbox" label="Canada" />
                    <Form.Check type="checkbox" label="Colombia" />
                    <Form.Check type="checkbox" label="Costa Rica" />
                  </Form.Group>
                </div>
                <div>
                <p className={styles.subtitle}>Asia</p>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Cambodia" />
                    <Form.Check type="checkbox" label="Japan" />
                    <Form.Check type="checkbox" label="Nepal" />
                    <Form.Check type="checkbox" label="Thailand" />
                    <Form.Check type="checkbox" label="Vietnam" />
                  </Form.Group>
                </div>
                <div>
                  <p className={styles.subtitle}>Europe</p>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="France" />
                      <Form.Check type="checkbox" label="Greece" />
                    </Form.Group>
                </div>
              </Container>
              <Container className={styles.container}>
                <p className={styles.title}>Reviews</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="5 Stars" />
                  <Form.Check type="checkbox" label="4 Stars & Up" />
                  <Form.Check type="checkbox" label="3 Stars & Up" />
                  <Form.Check type="checkbox" label="2 Stars & Up" />
                  <Form.Check type="checkbox" label="1 Stars & Up" />
                </Form.Group>
              </Container>
            </div>
  )
}

export default Filters