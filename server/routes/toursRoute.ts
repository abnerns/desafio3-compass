import { Tour } from "../models/tourModels";
import express from "express";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        if(
            !req.body.name ||
            !req.body.city ||
            !req.body.country ||
            !req.body.date_start ||
            !req.body.date_end ||
            !req.body.avgReview ||
            !req.body.duration
        ){
            return res.status(400).send({
                message: 'Send all required fields'
            })
        }

        const newTour= {
            name: req.body.name,
            city: req.body.city,
            country: req.body.country,
            date_start: req.body.date_start,
            date_end: req.body.date_end,
            avgReview: req.body.avgReview,
            duration: req.body.duration,
        }

        const tour = await Tour.create(newTour);

        return res.status(201).send(tour);
        
    } catch(error) {
        console.log(error.message);
        return res.status(500).send({message: error.message})
    }
})

router.get('/', async (req, res) => {
    try {
        const tours = await Tour.find({});
        return res.status(200).json({
            count: tours.length,
            data: tours
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
})

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const tour = await Tour.findById(id);
        return res.status(200).json(tour);
        
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
})

router.put('/:id', async (req, res) => {
    try {
      if (
        !req.body.name ||
        !req.body.city ||
        !req.body.country ||
        !req.body.date_start ||
        !req.body.date_end ||
        !req.body.avgReview ||
        !req.body.duration
      ) {
        return res.status(400).send({
          message: 'Send all required fields',
        });
      }
  
      const { id } = req.params;
  
      const result = await Tour.findByIdAndUpdate(id, req.body);
  
      if (!result) {
        return res.status(404).json({ message: 'Tour not found' });
      }
  
      return res.status(200).send({ message: 'Tour updated' });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      const result = await Tour.findByIdAndDelete(id);
  
      if (!result) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      return res.status(200).send({ message: 'Book deleted successfully' });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });

  export default router;