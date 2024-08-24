import express from "express";
import Tour from '../models/Tour'

const router = express.Router();

router.post('/add', (req, res) => {
  const {name, city, country, date_start, date_end, avgReview, duration, price} = req.body;
   
  Tour.create({
      name,
      city,
      country,
      date_start,
      date_end,
      avgReview,
      duration,
      price
  })
  .then(() => res.redirect('/'))
  .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Erro ao criar o tour no banco de dados.' });
  });
});


  export default router;