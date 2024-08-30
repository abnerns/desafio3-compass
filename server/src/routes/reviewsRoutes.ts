import { Router } from 'express';
import { addReview, removeReview, modifyReview, getCountByReviewHandler } from '../controllers/reviewsController';
import db from '../database/db';

const router = Router();

router.post('/', addReview);
router.get('/', (req, res) => {
    db.all('SELECT * FROM reviews', (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(rows);
    });
  });
router.delete('/:id', removeReview);
router.put('/:id', modifyReview);
router.get('/countByReview', getCountByReviewHandler);

export default router;
