import express from 'express';
import db from '../db/connections'
import bodyParser from 'body-parser';
import toursRouter from '../routes/tours';
import { ExpressHandlebars } from 'express-handlebars';

const PORT = 8000;
const app = express();

app.listen(PORT, () => {
  console.log(`App is listening to port: ${PORT}`);
});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

db.authenticate()
  .then(() => {
    console.log("Conectou com sucesso");
  })
  .catch(err => {
    console.log("Ocorreu um erro", err);
  });

app.get('/', (req, res) => {
  console.log(req);
  res.send("Está funcionando");
});


app.use('/tours', toursRouter);