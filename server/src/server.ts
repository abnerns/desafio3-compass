import http from 'http';
import sqlite3 from 'sqlite3';
import { Tour } from './types';

const db = new sqlite3.Database("app.db", (err: Error | null) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Conexão estabelecida com sucesso.");
    }
});

db.run(
  `CREATE TABLE IF NOT EXISTS tours (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    city TEXT,
    country TEXT,
    date_start TEXT,
    date_end TEXT,s
    avgReview REAL,
    duration TEXT,
    price REAL
  )`,
  (err: Error | null) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Tabela criada com sucesso.");
    }
  }
);

const search = (callback: (rows: Tour[]) => void): void => {
    db.all("SELECT * FROM tours", (err: Error | null, rows: Tour[]) => {
        if (err) {
            console.error(err.message);
        } else {
            callback(rows);
        }
    });
};

const insertData = db.prepare(
  `INSERT INTO tours (name, city, country, date_start, date_end, avgReview, duration, price)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  (err: Error | null) => {
    if (err) {
      console.error(err.message);
    }
  }
);

const deleteData = db.prepare(
  `DELETE FROM tours WHERE id = ?`,
  (err: Error | null) => {
    if (err) {
      console.error(err.message);
    }
  }
);

const updateData = db.prepare(
  `UPDATE tours
    SET name = ?,
        city = ?,
        country = ?,
        date_start = ?,
        date_end = ?,
        avgReview = ?,
        duration = ?,
        price = ?
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

    if (req.method === "GET") {
        search((result) => {
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
            const parsedBody: Tour = JSON.parse(body);
            console.log(parsedBody);
            insertData.run(
                parsedBody.name,
                parsedBody.city,
                parsedBody.country,
                parsedBody.date_start,
                parsedBody.date_end,
                parsedBody.avgReview,
                parsedBody.duration,
                parsedBody.price
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
            const parsedBody: Tour & { id: number } = JSON.parse(body);
            console.log(parsedBody);

            updateData.run(
              parsedBody.name,
              parsedBody.city,
              parsedBody.country,
              parsedBody.date_start,
              parsedBody.date_end,
              parsedBody.avgReview,
              parsedBody.duration,
              parsedBody.price,
              parsedBody.id
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
