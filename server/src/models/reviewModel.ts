import db from '../database/db';
import { Review } from '../types';

export const createReviewTable = () => {
  db.run(
    `CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      idTour INTEGER,
      user_name TEXT,
      user_email TEXT,
      message TEXT,
      services INTEGER,
      price INTEGER,
      location INTEGER,
      food INTEGER,  
      amenities INTEGER,
      comfort INTEGER,
      created_at TEXT DEFAULT (datetime('now','localtime')),
      FOREIGN KEY (idTour) REFERENCES tours(id)
    )`,
    (err: Error | null) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
};

export const insertReview = (review: Review) => {
  const insertData = db.prepare(
    `INSERT INTO reviews (idTour, user_name, user_email, message, services, price, location, food, amenities, comfort)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    (err: Error | null) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  insertData.run(
    review.idTour,
    review.user_name,
    review.user_email,
    review.message,
    review.services,
    review.price,
    review.location,
    review.food,
    review.amenities,
    review.comfort
  );
};

export const deleteReview = (id: number) => {
  const deleteData = db.prepare(
    `DELETE FROM reviews WHERE id = ?`,
    (err: Error | null) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  deleteData.run(id);
};

export const updateReview = (review: Review & { id: number }) => {
  const updateData = db.prepare(
    `UPDATE reviews
      SET user_name = ?,
          user_email = ?,
          message = ?,
          services = ?,
          price = ?,
          location = ?,
          food = ?,
          amenities = ?,
          comfort = ?
     WHERE id = ?`,
    (err: Error | null) => {
      if (err) {
        console.error(err.message);
      }
    }
  );

  updateData.run(
    review.user_name,
    review.user_email,
    review.message,
    review.services,
    review.price,
    review.location,
    review.food,
    review.amenities,
    review.comfort,
    review.id
  );
};

export const getCountByReview = (callback: (res: { idTour: number, count: number }[]) => void): void => {
  db.all(
      `SELECT idTour, COUNT(*) as count FROM reviews GROUP BY idTour`,
      (err: Error | null, res: { idTour: number, count: number }[]) => {
          if (err) {
              console.error(err.message);
          } else {
              callback(res);
          }
      }
  );
};
