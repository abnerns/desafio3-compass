import { Request, Response } from 'express';
import { searchTours, searchToursByCategory, getCountByCategory, getLowestPrice, getTotalTour, getTourById, searchToursByReview, searchToursByDestination, searchToursByPrice, searchToursByName, searchToursByDestinationName, searchToursByType, searchToursByDate, searchToursByMaxPeople, searchToursSorted } from '../models/tourModel';
import { searchDestinations } from '../models/destinationModel';

export const getTours = (req: Request, res: Response) => {
  const { limit = 9, offset = 0, idCateg, minAvgReview, idDestination, minPrice, name, destinationName, type, dateStart, maxPeople, sortOrder = 'ASC' } = req.query;

  if (name) {
    searchToursByName(name as string, parseInt(limit as string), parseInt(offset as string), (result) => {
      res.status(200).json(result);
    });
  } else if (type) {
      searchToursByType(type as string, parseInt(limit as string), parseInt(offset as string), (result) => {
        res.status(200).json(result);
      });
  }else if (destinationName) { 
    searchToursByDestinationName(destinationName as string, parseInt(limit as string), parseInt(offset as string), (result) => {
      res.status(200).json(result);
    });
  } else if (idDestination) {
    searchToursByDestination(parseInt(idDestination as string), parseInt(limit as string), parseInt(offset as string), (result) => {
      res.status(200).json(result);
    });
  } else if (minAvgReview) {
    searchToursByReview(parseFloat(minAvgReview as string), parseInt(limit as string), parseInt(offset as string), (result) => {
      res.status(200).json(result);
    });
  } else if (idCateg) {
    searchToursByCategory(parseInt(idCateg as string), parseInt(limit as string), parseInt(offset as string), (result) => {
      res.status(200).json(result);
    });
  } else if (minPrice) {
    searchToursByPrice(parseInt(minPrice as string), parseInt(limit as string), parseInt(offset as string), (result) => {
      res.status(200).json(result);
    });
  } else if (dateStart) {
    searchToursByDate(dateStart as string, parseInt(limit as string), parseInt(offset as string), (result) => {
      res.status(200).json(result);
    });
  } else if (maxPeople) {
    searchToursByMaxPeople(parseInt(maxPeople as string), parseInt(limit as string), parseInt(offset as string), (result) => {
      res.status(200).json(result);
    });
  } else if (sortOrder) {
    searchToursSorted(parseInt(limit as string), parseInt(offset as string), sortOrder as 'ASC' | 'DESC', (result) => {
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

export const getDestinations = (req: Request, res: Response) => {
  searchDestinations((result) => {
      res.status(200).json(result);
  });
};
