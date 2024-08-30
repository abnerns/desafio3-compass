import db from '../database/db';
import { Categ, Tour } from '../types';

export const createTourTable = () => {
  db.run(
    `CREATE TABLE IF NOT EXISTS tours (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      city TEXT,
      country TEXT,
      date_start TEXT,
      date_end TEXT,
      avgReview INTEGER,
      duration TEXT,
      price INTEGER,
      idCateg INTEGER,
      FOREIGN KEY (idCateg) REFERENCES categories(id)
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
      "SELECT * FROM tours LIMIT ? OFFSET ?",
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
    "SELECT * FROM tours WHERE idCateg = ? LIMIT ? OFFSET ?",
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
    db.get("SELECT * FROM tours WHERE id = ?", [id], (err: Error | null, res: Tour) => {
      if (err) {
        console.error(err.message);
      } else {
        callback(res);
      }
    });
  };