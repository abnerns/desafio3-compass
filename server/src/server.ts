import http from 'http';
const sqlite3 = require("sqlite3").verbose();

const db = new  sqlite3.Database("app.db", (err)=>{
    if(err){
        console.error(err);
    }else{
        console.log("Conexão estabelecida com sucesso.")
    }
});

db.run(
  `CREATE TABLE IF NOT EXISTS tours (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    city TEXT,
    country TEXT,
    date_start TEXT,
    date_end TEXT,
    avgReview REAL,
    duration INTEGER,
    price REAL
  )`,
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Tabela criada com sucesso.");
    }
  }
);

const search = (callback)=>{
    db.all("SELECT * FROM tours", (err, rows)=>{
        if(err){
            console.error(err);
        }else{
            callback(rows);
        }
    });
};

const insertData = db.prepare(
  `INSERT INTO tours (name, city, country, date_start, date_end, avgReview, duration, price)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Dados inseridos com sucesso.");
    }
  }
);


const deleteData = db.prepare(
    `DELETE FROM tours WHERE id == ?`,
    (err)=>{
        if(err){
            console.error(err);
        }else{
            console.log("Dados excluídos com sucesso.");
        }
    }
);

const modifyData = db.prepare(
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
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Dados modificados com sucesso.");
    }
  }
);


const server = http.createServer((req, res)=>{

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    search((result)=>{
        res.write(JSON.stringify(result));
        res.end();
    });

    
    if(req.method === "POST"){
        let body = "";
        req.on("data", (chunk)=>{
            body += chunk;
        });
        req.on("end", ()=>{
            const parsedBody = JSON.parse(body);
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
            console.log("Dados criados com sucesso.");
        });

        
    }else if(req.method === "DELETE"){
        let body = "";
        req.on("data", (chunk)=>{
            body += chunk;
        });
        req.on("end", ()=>{
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            deleteData.run(parsedBody.id);
            console.log("Dados excluídos com sucesso.");
        });

    }else if(req.method === "PUT"){
        let body = "";
        req.on("data", (chunk)=>{
            body += chunk;
        });
        req.on("end", ()=>{
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);

            modifyData.run(
              parsedBody.name,
              parsedBody.city,
              parsedBody.country,
              parsedBody.date_start,
              parsedBody.date_end,
              parsedBody.avgReview,
              parsedBody.duration,
              parsedBody.price
            );
            console.log("Dados modificados com sucesso.");
        });
    }

});
const PORT = 8000;
server.listen(PORT);
console.log(`Servidor escutando no porto ${PORT}`)