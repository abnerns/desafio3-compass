import { Router } from 'express';
import { addReview, removeReview, modifyReview, getCountByReviewHandler, getUserRatingsHandler } from '../controllers/reviewsController';
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
router.get('/rating/:idTour/:user_email', getUserRatingsHandler);
router.get('/avgReviews/:idTour', (req, res) => {
  const { idTour } = req.params;
  db.get('SELECT * FROM avgReviews WHERE idTour = ?', [idTour], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(row);
    }
  });
});

export default router;
