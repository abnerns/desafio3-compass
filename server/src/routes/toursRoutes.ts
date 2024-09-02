import { Router } from 'express';
import { getTours, getCountByCategoryHandler, getLowestPriceHandler, getTotalTourHandler, getTourDetails, getDestinations } from '../controllers/toursController';

const router = Router();

router.get('/', getTours);
router.get('/countByCategory', getCountByCategoryHandler);
router.get('/lowestPrice', getLowestPriceHandler);
router.get('/total', getTotalTourHandler);
router.get('/destination', getDestinations);
router.get('/:id', getTourDetails);

export default router;
