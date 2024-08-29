import db from '../database/db';
import { Categ } from '../types';

export const createCategoryTable = () => {
  db.run(
    `CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    )`,
    (err: Error | null) => {
      if (err) {
        console.error(err.message);
      }
    }
  );
};

export const searchCategories = (callback: (res: Categ[]) => void): void => {
  db.all("SELECT * FROM categories", (err: Error | null, res: Categ[]) => {
      if (err) {
          console.error(err.message);
      } else {
          callback(res);
      }
  });
};
