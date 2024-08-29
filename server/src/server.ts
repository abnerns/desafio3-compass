import http from 'http';
import sqlite3 from 'sqlite3';
import { Categ, Review, Tour } from './types';

const db = new sqlite3.Database("app.db", (err: Error | null) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Conexão estabelecida com sucesso.");
    }
});

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
    FOREIGN KEY (idTour) REFERENCES tours(id)
  )`,
  (err: Error | null) => {
    if (err) {
      console.error(err.message);
    }
  }
);

const searchTours = (limit: number, offset: number, callback: (res: Tour[]) => void): void => {
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

const searchCategories = (callback: (res: Categ[]) => void): void => {
  db.all("SELECT * FROM categories", (err: Error | null, res: Categ[]) => {
      if (err) {
          console.error(err.message);
      } else {
          callback(res);
      }
  });
};

const getCountByCategory = (callback: (res: Categ[]) => void): void => {
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

const getCountByReview = (callback: (res: { idTour: number, count: number }[]) => void): void => {
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

const getLowestPrice = (callback: (res: Categ[]) => void): void => {
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

const insertData = db.prepare(
  `INSERT INTO reviews (user_name, user_email, message, services, price, location, food, amenities, comfort)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  (err: Error | null) => {
    if (err) {
      console.error(err.message);
    }
  }
);

const deleteData = db.prepare(
  `DELETE FROM reviews WHERE id = ?`,
  (err: Error | null) => {
    if (err) {
      console.error(err.message);
    }
  }
);

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

const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "GET" && req.url?.startsWith("/tours")) {
      const url = new URL(req.url, `http://${req.headers.host}`);
      const limit = parseInt(url.searchParams.get("limit") || "9");
      const offset = parseInt(url.searchParams.get("offset") || "0");

      searchTours(limit, offset, (result) => {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify(result));
          res.end();
      });

    } else if (req.method === "GET" && req.url === "/categories") {
        searchCategories((result) => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify(result));
            res.end();
        });

    } else if (req.method === "GET" && req.url === "/countByCategory") {
      getCountByCategory((result) => {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify(result));
          res.end();
      });

    } else if (req.method === "GET" && req.url === "/lowestPrice") {
      getLowestPrice((result) => {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify(result));
          res.end();
      });

    } else if (req.method === "GET" && req.url === "/countByReview") {
      getCountByReview((result) => {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify(result));
          res.end();
      });

    } else if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const parsedBody: Review = JSON.parse(body);
            console.log(parsedBody);
            insertData.run(
                parsedBody.user_name,
                parsedBody.user_email,
                parsedBody.message,
                parsedBody.services,
                parsedBody.price,
                parsedBody.location,
                parsedBody.food,
                parsedBody.amenities,
                parsedBody.comfort
            );
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Dados criados com sucesso.");
        });
    } else if (req.method === "DELETE") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const parsedBody: { id: number } = JSON.parse(body);
            console.log(parsedBody);
            deleteData.run(parsedBody.id);
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Dados excluídos com sucesso.");
        });
    } else if (req.method === "PUT") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        req.on("end", () => {
            const parsedBody: Review & { id: number } = JSON.parse(body);
            console.log(parsedBody);

            updateData.run(
                parsedBody.user_name,
                parsedBody.user_email,
                parsedBody.message,
                parsedBody.services,
                parsedBody.price,
                parsedBody.location,
                parsedBody.food,
                parsedBody.amenities,
                parsedBody.comfort
            );
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end("Dados modificados com sucesso.");
        });
    }
});

const PORT = 8000;
server.listen(PORT, () => {
    console.log(`Servidor escutando no porto ${PORT}`);
});
