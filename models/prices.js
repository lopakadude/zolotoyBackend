const mongoose = require('mongoose');

const pricesSchema = new mongoose.Schema({
  category1: {
    type: String,
    required: [true, 'Поле "категория 1" должно быть заполнено'],
    minlength: [8, 'Минимальная длина поля "категория 1" - 2'],
    maxlength: [30, 'Максимальная длина поля "категория 1" - 30'],
  },
  category2: {
    type: String,
    required: [true, 'Поле "категория 2" должно быть заполнено'],
    minlength: [8, 'Минимальная длина поля "категория 2" - 2'],
    maxlength: [30, 'Максимальная длина поля "категория 2" - 30'],
  },
  category3: {
    type: String,
    required: [true, 'Поле "категория 3" должно быть заполнено'],
    minlength: [8, 'Минимальная длина поля "категория 3" - 2'],
    maxlength: [30, 'Максимальная длина поля "категория 3" - 30'],
  },
  category4: {
    type: String,
    required: [true, 'Поле "категория 4" должно быть заполнено'],
    minlength: [8, 'Минимальная длина поля "категория 4" - 2'],
    maxlength: [30, 'Максимальная длина поля "категория 4" - 30'],
  },
  category5: {
    type: String,
    required: [true, 'Поле "категория 5" должно быть заполнено'],
    minlength: [8, 'Минимальная длина поля "категория 5" - 2'],
    maxlength: [30, 'Максимальная длина поля "категория 5" - 30'],
  },
  monthlyRateCategory1: {
    type: String,
    required: [true, 'Поле "категория 1" должно быть заполнено'],
  },
  monthlyRateCategory2: {
    type: String,
    required: [true, 'Поле "категория 2" должно быть заполнено'],
  },
  monthlyRateCategory3: {
    type: String,
    required: [true, 'Поле "категория 3" должно быть заполнено'],
  },
  monthlyRateCategory4: {
    type: String,
    required: [true, 'Поле "категория 4" должно быть заполнено'],
  },
  monthlyRateCategory5: {
    type: String,
    required: [true, 'Поле "категория 5" должно быть заполнено'],
  },
  dailyRateCategory1: {
    type: String,
    required: [true, 'Поле "категория 1" должно быть заполнено'],
  },
  dailyRateCategory2: {
    type: String,
    required: [true, 'Поле "категория 2" должно быть заполнено'],
  },
  dailyRateCategory3: {
    type: String,
    required: [true, 'Поле "категория 3" должно быть заполнено'],
  },
  dailyRateCategory4: {
    type: String,
    required: [true, 'Поле "категория 4" должно быть заполнено'],
  },
  dailyRateCategory5: {
    type: String,
    required: [true, 'Поле "категория 5" должно быть заполнено'],
  },
  goldThreeSevenFive: {
    type: String,
    required: [true, 'Поле "threeSevenFive" должно быть заполнено'],
  },
  goldFiveHundred: {
    type: String,
    required: [true, 'Поле "fiveHundred" должно быть заполнено'],
  },
  goldFiveEightFive: {
    type: String,
    required: [true, 'Поле "fiveEightFive" должно быть заполнено'],
  },
  goldSevenHundred: {
    type: String,
    required: [true, 'Поле "sevenHundred" должно быть заполнено'],
  },
  goldCrown: {
    type: String,
    required: [true, 'Поле "crown" должно быть заполнено'],
  },
  goldNineHundred: {
    type: String,
    required: [true, 'Поле "nineHundred" должно быть заполнено'],
  },
  silverEightSevenFive: {
    type: String,
    required: [true, 'Поле "eightSevenFive" должно быть заполнено'],
  },
  silverNineTwoFive: {
    type: String,
    required: [true, 'Поле "nineTwoFive" должно быть заполнено'],
  },
}, { versionKey: false });

const Prices = mongoose.model('prices', pricesSchema);

module.exports = Prices;
