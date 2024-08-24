import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Tour } from '../models/tourModels.js';
import toursRoute from '../routes/toursRoute.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  console.log(req);
  res.send("Hello world")
});

app.use('/tours', toursRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });