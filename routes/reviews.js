const router = require('express').Router();
const {
  getReviews, createReview, deleteReview,
} = require('../controllers/reviews');
const celebrates = require('../middlewares/celebrates');

router.get('/', getReviews);
router.post('/', celebrates.createReview, createReview);
router.delete('/:reviewId', celebrates.checkIdReview, deleteReview);

module.exports = router;
