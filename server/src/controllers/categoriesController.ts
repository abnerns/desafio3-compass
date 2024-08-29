import { Request, Response } from 'express';
import { searchCategories } from '../models/categoryModel';

export const getCategories = (req: Request, res: Response) => {
    searchCategories((result) => {
        res.status(200).json(result);
    });
};