import { Request, Response } from 'express';
import { searchTours, searchToursByCategory, getCountByCategory, getLowestPrice, getTotalTour, getTourById } from '../models/tourModel';

export const getTours = (req: Request, res: Response) => {
  const { limit = 9, offset = 0, idCateg } = req.query;

  if (idCateg) {
    searchToursByCategory(parseInt(idCateg as string), parseInt(limit as string), parseInt(offset as string), (result) => {
      res.status(200).json(result);
    });
  } else {
    searchTours(parseInt(limit as string), parseInt(offset as string), (result) => {
      res.status(200).json(result);
    });
  }
};

export const getCountByCategoryHandler = (req: Request, res: Response) => {
    getCountByCategory((result) => {
        res.status(200).json(result);
    });
};

export const getLowestPriceHandler = (req: Request, res: Response) => {
    getLowestPrice((result) => {
        res.status(200).json(result);
    });
};

export const getTotalTourHandler = (req: Request, res: Response) => {
    getTotalTour((count) => {
        res.status(200).json({ count });
    });
};

export const getTourDetails = (req: Request, res: Response) => {
  const { id } = req.params;
  getTourById(parseInt(id), (tour) => {
    if (tour) {
      res.status(200).json(tour);
    } else {
      res.status(404).json({ message: "Tour not found" });
    }
  });
};