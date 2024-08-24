import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import toursRoute from '../routes/toursRoute.js';
import cors from 'cors';

const app = express();

/* app.use(
    cors({
        origin: 'https://localhost:8000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
) */

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