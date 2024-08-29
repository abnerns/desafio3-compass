import { Router } from 'express';
import { getTours, getCountByCategoryHandler, getLowestPriceHandler, getTotalTourHandler } from '../controllers/toursController';

const router = Router();

router.get('/', getTours);
router.get('/countByCategory', getCountByCategoryHandler);
router.get('/lowestPrice', getLowestPriceHandler);
router.get('/total', getTotalTourHandler);

export default router;
