import db from '../database/db';
import { Categ, Tour } from '../types';

export const createTourTable = () => {
  db.run(
    `CREATE TABLE IF NOT EXISTS tours (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      city TEXT,
      idDestination INTEGER,
      price INTEGER,
      date_start TEXT,
      maxPeople INTEGER,
      minAge INTEGER,
      duration INTEGER,
      idCateg INTEGER,
      FOREIGN KEY (idCateg) REFERENCES categories(id),
      FOREIGN KEY (idDestination) REFERENCES destination(id)
    )`,
    (err: Error | null) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
};

export const searchTours = (limit: number, offset: number, callback: (res: Tour[]) => void): void => {
  db.all(
    `SELECT 
      tours.*, 
      destination.name as destinationName,
      COALESCE((
        (AVG(avgReviews.services) + AVG(avgReviews.price) + AVG(avgReviews.location) + AVG(avgReviews.food) + AVG(avgReviews.amenities) + AVG(avgReviews.comfort)) / 6
      ), 0) as avgReview
    FROM tours
    LEFT JOIN destination ON tours.idDestination = destination.id
    LEFT JOIN avgReviews ON tours.id = avgReviews.idTour
    GROUP BY tours.id
    LIMIT ? OFFSET ?`,
    [limit, offset],
    (err: Error | null, res: Tour[]) => {
      if (err) {
        console.error(err.message);
      } else {
        callback(res);
      }
    }
  );
};
export const searchToursByCategory = (idCateg: number, limit: number, offset: number, callback: (res: Tour[]) => void): void => {
  db.all(
    `SELECT 
      tours.*, 
      destination.name as destinationName,
      COALESCE((
        (AVG(avgReviews.services) + AVG(avgReviews.price) + AVG(avgReviews.location) + AVG(avgReviews.food) + AVG(avgReviews.amenities) + AVG(avgReviews.comfort)) / 6
      ), 0) as avgReview
    FROM tours
    LEFT JOIN destination ON tours.idDestination = destination.id
    LEFT JOIN avgReviews ON tours.id = avgReviews.idTour
    WHERE tours.idCateg = ?
    GROUP BY tours.id
    LIMIT ? OFFSET ?`,
    [idCateg, limit, offset],
    (err: Error | null, res: Tour[]) => {
      if (err) {
        console.error(err.message);
      } else {
        callback(res);
      }
    }
  );
};

export const searchToursByDestination = (
  idDestination: number,
  limit: number,
  offset: number,
  callback: (res: Tour[]) => void
): void => {
  db.all(
    `SELECT 
      tours.*, 
      destination.name as destinationName,
      COALESCE((
        (AVG(avgReviews.services) + AVG(avgReviews.price) + AVG(avgReviews.location) + AVG(avgReviews.food) + AVG(avgReviews.amenities) + AVG(avgReviews.comfort)) / 6
      ), 0) as avgReview
    FROM tours
    LEFT JOIN destination ON tours.idDestination = destination.id
    LEFT JOIN avgReviews ON tours.id = avgReviews.idTour
    WHERE tours.idDestination = ?
    GROUP BY tours.id
    LIMIT ? OFFSET ?`,
    [idDestination, limit, offset],
    (err: Error | null, res: Tour[]) => {
      if (err) {
        console.error(err.message);
      } else {
        callback(res);
      }
    }
  );
};

export const getCountByCategory = (callback: (res: Categ[]) => void): void => {
  db.all(
    `SELECT idCateg, COUNT(*) as count FROM tours GROUP BY idCateg`,
    (err: Error | null, res: Categ[]) => {
      if (err) {
        console.error(err.message);
      } else {
        callback(res);
      }
    }
  );
};

export const getLowestPrice = (callback: (res: Categ[]) => void): void => {
  db.all(
    `SELECT idCateg, MIN(price) as lowestPrice FROM tours GROUP BY idCateg`,
    (err: Error | null, res: Categ[]) => {
      if (err) {
        console.error(err.message);
      } else {
        callback(res);
      }
    }
  );
};

export const getTotalTour = (callback: (count: number) => void): void => {
    db.get("SELECT COUNT(*) as count FROM tours", (err: Error | null, res: { count: number }) => {
      if (err) {
        console.error(err.message);
      } else {
        callback(res.count);
      }
    });
  };

  export const getTourById = (id: number, callback: (res: Tour | null) => void): void => {
    db.get(
      `SELECT 
        tours.*, 
        categories.name AS categoryName,
        destination.name AS destinationName
      FROM tours
      LEFT JOIN categories ON tours.idCateg = categories.id
      LEFT JOIN destination ON tours.idDestination = destination.id
      WHERE tours.id = ?`,
      [id],
      (err: Error | null, res: Tour) => {
        if (err) {
          console.error(err.message);
        } else {
          callback(res);
        }
      }
    );
  };
  export const searchToursByReview = (minAvgReview: number, limit: number, offset: number, callback: (res: Tour[]) => void): void => {
    db.all(
      `SELECT 
        tours.*,
        destination.name as destinationName,
        COALESCE((
          (AVG(avgReviews.services) + AVG(avgReviews.price) + AVG(avgReviews.location) + AVG(avgReviews.food) + AVG(avgReviews.amenities) + AVG(avgReviews.comfort)) / 6
        ), 0) as avgReview
      FROM tours
      LEFT JOIN destination ON tours.idDestination = destination.id
      LEFT JOIN avgReviews ON tours.id = avgReviews.idTour
      GROUP BY tours.id
      HAVING avgReview >= ?
      LIMIT ? OFFSET ?`,
      [minAvgReview, limit, offset],
      (err: Error | null, res: Tour[]) => {
        if (err) {
          console.error(err.message);
        } else {
          callback(res);
        }
      }
    );
  };