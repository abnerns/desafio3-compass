import { Router } from 'express';
import { addReview, removeReview, modifyReview, getCountByReviewHandler } from '../controllers/reviewsController';

const router = Router();

router.post('/', addReview);
router.delete('/:id', removeReview);
router.put('/:id', modifyReview);
router.get('/countByReview', getCountByReviewHandler);

export default router;
