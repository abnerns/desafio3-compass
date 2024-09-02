import { Destination } from "aws-sdk/clients/lexmodelbuildingservice";
import db from "../database/db";

export const createDestinationTable = () => {
    db.run(
      `CREATE TABLE IF NOT EXISTS destination (
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

  export const searchDestinations = (callback: (res: Destination[]) => void): void => {
    db.all("SELECT * FROM destination", (err: Error | null, res: Destination[]) => {
        if (err) {
            console.error(err.message);
        } else {
            callback(res);
        }
    });
  };
  