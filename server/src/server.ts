import express, { Application } from 'express';
import cors from 'cors';
import tourRoutes from './routes/toursRoutes';
import reviewRoutes from './routes/reviewsRoutes';
import categoryRoutes from './routes/categoriesRoutes';
import { createCategoryTable } from './models/categoryModel';
import { createReviewTable } from './models/reviewModel';
import { createTourTable } from './models/tourModel';
import { createAvgReviewTable } from './models/avgReviews';

const app: Application = express();
app.use(express.json());

app.use(cors());

createCategoryTable();
createTourTable();
createReviewTable();
createAvgReviewTable();

app.use('/tours', tourRoutes);
app.use('/reviews', reviewRoutes);
app.use('/categories', categoryRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
