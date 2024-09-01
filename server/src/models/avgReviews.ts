import db from "../database/db";


export const createAvgReviewTable = () => {
    db.run(
      `CREATE TABLE IF NOT EXISTS avgReviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        idTour INTEGER UNIQUE,
        services INTEGER,
        price INTEGER,
        location INTEGER,
        food INTEGER,
        amenities INTEGER,
        comfort INTEGER,
        FOREIGN KEY (idTour) REFERENCES tours(id)
      )`,
      (err: Error | null) => {
        if (err) {
          console.error(err.message);
        }
      }
    );
  };

  export const updateAvgReview = (idTour: number) => {
    const query = `
      INSERT INTO avgReviews (idTour, services, price, location, food, amenities, comfort)
      SELECT 
        idTour,
        AVG(services) AS services,
        AVG(price) AS price,
        AVG(location) AS location,
        AVG(food) AS food,
        AVG(amenities) AS amenities,
        AVG(comfort) AS comfort
      FROM reviews
      WHERE idTour = ?
      ON CONFLICT(idTour) DO UPDATE SET
        services = excluded.services,
        price = excluded.price,
        location = excluded.location,
        food = excluded.food,
        amenities = excluded.amenities,
        comfort = excluded.comfort;
    `;
    db.run(query, [idTour], (err: Error | null) => {
      if (err) {
        console.error(err.message);
      }
    });
  };