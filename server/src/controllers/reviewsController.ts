import { Request, Response } from 'express';
import { insertReview, deleteReview, updateReview, getCountByReview, getUserAvgRatings } from '../models/reviewModel';
import { updateAvgReview } from '../models/avgReviewsModel';
import { Review } from '../types';

export const addReview = (req: Request, res: Response) => {
    const review: Review = req.body;
    insertReview(review);
    updateAvgReview(review.idTour);
    res.status(200).send("Dados criados com sucesso.");
};

export const removeReview = (req: Request, res: Response) => {
    const { id } = req.params;
    deleteReview(parseInt(id));
    res.status(200).send("Dados removidos com sucesso.");
};

export const modifyReview = (req: Request, res: Response) => {
    const { id } = req.params;
    const review: Review & { id: number } = { ...req.body, id: parseInt(id) };
    updateReview(review);
    updateAvgReview(review.idTour);
    res.status(200).send("Dados atualizados com sucesso.");
};

export const getCountByReviewHandler = (req: Request, res: Response) => {
    getCountByReview((result) => {
        res.status(200).json(result);
    });
};

export const getUserRatingsHandler = (req: Request, res: Response) => {
    const { idTour, user_email } = req.params;
    getUserAvgRatings(Number(idTour), user_email, (avgRatings) => {
      res.status(200).json(avgRatings);
    });
  };