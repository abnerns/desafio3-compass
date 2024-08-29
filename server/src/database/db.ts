import sqlite3 from 'sqlite3';

const db = new sqlite3.Database("app.db", (err: Error | null) => {
    if (err) {
        console.error(err.message);
    } else {
        console.log("Conexão estabelecida com sucesso.");
    }
});

export default db;