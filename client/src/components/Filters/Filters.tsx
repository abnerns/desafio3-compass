import { useEffect, useState } from "react";
import styles from "./Filters.module.css"
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { Categ, Destination } from "./types";

const Filters = ({ onCategoryChange, onReviewFilterChange, onDestinationChange, onPriceFilterChange, onSearchChange}: { onCategoryChange: (id: number | null) => void, onReviewFilterChange: (minAvgReview: number | null) => void, onDestinationChange: (id: number | null) => void, onPriceFilterChange : (minPrice: number | null) => void, onSearchChange: (name: string) => void }) => {
  const [priceFilter, setPriceFilter] = useState<number>(0);
  const [categories, setCategories] = useState<Categ[]>([]);
  const [destinations, setDestinations] = useState<{ [key: string]: Destination[] }>({
    Africa: [],
    Americas: [],
    Asia: [],
    Europe: []
  });

  const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceFilter(Number(event.target.value));
  };

  useEffect(() => {
    fetch('http://localhost:8000/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Erro ao buscar dados.", error));

      fetch('http://localhost:8000/tours/destination')
      .then((response) => response.json())
      .then((data) => {
        const continentMap: { [key: string]: Destination[] } = {
          Africa: data.filter((dest: Destination) => dest.id >= 1 && dest.id <= 2),
          Americas: data.filter((dest: Destination) => dest.id >= 3 && dest.id <= 6),
          Asia: data.filter((dest: Destination) => dest.id >= 7 && dest.id <= 9),
          Europe: data.filter((dest: Destination) => dest.id >= 10 && dest.id <= 13),
        };
        setDestinations(continentMap);
      })
      .catch((error) => console.error("Erro ao buscar dados.", error));
  }, []);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>, idCateg: number) => {
    if (event.target.checked) {
      onCategoryChange(idCateg);
    } else {
      onCategoryChange(null);
    }
  };

  const handleReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (event.target.checked) {
      onReviewFilterChange(value);
    } else {
      onReviewFilterChange(null);
    }
  };

  const handleDestinationChange = (event: React.ChangeEvent<HTMLInputElement>, idDestination: number) => {
    if (event.target.checked) {
      onDestinationChange(idDestination);
    } else {
      onDestinationChange(null);
    }
  };

  const handlePriceChange = () => {
    onPriceFilterChange(priceFilter);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className={styles.aside}>
              <Container className={styles.container}>
                <p className={styles.title}>Search</p>
                <Form className="d-flex align-items-center">
                    <div className={styles.input}>
                      <input type="type" placeholder="Type anything..." style={{width: '10.5vw'}} onChange={handleSearchChange} />
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
                <button onClick={handlePriceChange} className={styles.btn}>Submit</button>
              </Container>
              <Container className={styles.container}>
                <p className={styles.title}>Categories</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  {categories.map((category) => (
                      <Form.Check type="checkbox" label={category.name} key={category.id} onChange={(e) => handleCategoryChange(e, category.id)}  />
                  ))}
                </Form.Group>
              </Container>
              <Container className={styles.container}>
                <p className={styles.title}>Destinations</p>
                {Object.entries(destinations).map(([continent, dests]) => (
                  <div key={continent}>
                    <p className={styles.subtitle}>{continent}</p>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      {dests.map((destination) => (
                        <Form.Check type="checkbox" label={destination.name} key={destination.id} onChange={(e) => handleDestinationChange(e, destination.id)} />
                      ))}
                    </Form.Group>
                  </div>
                ))}
              </Container>
              <Container className={styles.container}>
                <p className={styles.title}>Reviews</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="5 Stars" value="5" onChange={handleReviewChange} />
                  <Form.Check type="checkbox" label="4 Stars & Up" value="4" onChange={handleReviewChange} />
                  <Form.Check type="checkbox" label="3 Stars & Up" value="3" onChange={handleReviewChange} />
                  <Form.Check type="checkbox" label="2 Stars & Up" value="2" onChange={handleReviewChange} />
                  <Form.Check type="checkbox" label="1 Stars & Up" value="1" onChange={handleReviewChange} />
                </Form.Group>
              </Container>
            </div>
  )
}

export default Filters