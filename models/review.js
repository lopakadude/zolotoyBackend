const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Поле "name" должно быть заполнено'],
    minlength: [2, 'Минимальная длина поля "name" - 2'],
    maxlength: [30, 'Максимальная длина поля "name" - 30'],
  },
  review: {
    type: String,
    required: [true, 'Поле "review" должно быть заполнено'],
    minlength: [10,'Минимальная длина поля "review" - 2'],
    maxlength: [450, 'Максимальная длина поля "review" - 30'],
  },
  grade: {
    type: Number,
    required: [true, 'Поле "grade" должно быть заполнено'],
  }

}, { versionKey: false });

const Review = mongoose.model('review', reviewSchema);

module.exports = Review;
