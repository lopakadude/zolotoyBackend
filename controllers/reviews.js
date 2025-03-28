const mongoose = require('mongoose');
const BadRequest = require('../errors/BadRequest');
const NotFoundError = require('../errors/NotFoundError');
const Review = require('../models/review');

module.exports.getReviews = (req, res, next) => {
  Review.find({})
    .then((reviews) => res.send({ data: reviews }))
    .catch(next);
};

module.exports.createReview = (req, res, next) => {
  const { name, review, grade } = req.body;
  Review.create({ name, review, grade })
    .then((review) => res.status(201).send({ data: review }))
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        next(new BadRequest(
          'Переданы некорректные данные при создании карточки.',
        ));
      } else {
        next(err);
      }
    });
};

module.exports.deleteReview = (req, res, next) => {
  const { reviewId } = req.params;

  Review.findById({ _id: reviewId })
    .then((reviewInfo) => {
      if (reviewInfo) {
          Review.deleteOne({ _id: reviewId })
            .then((review) => {
              if (review) {
                res.send({ data: reviewId });
              }
            })
            .catch((err) => next(err));
      } else {
        throw new NotFoundError('Карточка по указанному id не найдена');
      }
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.CastError) {
        next(new BadRequest('Некорректный формат id.'));
      } else {
        next(err);
      }
    });
};

