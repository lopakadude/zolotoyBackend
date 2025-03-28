const mongoose = require('mongoose');
const BadRequest = require('../errors/BadRequest');
const NotFoundError = require('../errors/NotFoundError');
const Price = require('../models/prices');


module.exports.createPrices = (req, res, next) => {
  const {
    category1,
    category2,
    category3,
    category4,
    category5,
    monthlyRateCategory1,
    monthlyRateCategory2,
    monthlyRateCategory3,
    monthlyRateCategory4,
    monthlyRateCategory5,
    dailyRateCategory1,
    dailyRateCategory2,
    dailyRateCategory3,
    dailyRateCategory4,
    dailyRateCategory5,
    goldThreeSevenFive,
    goldFiveHundred,
    goldFiveEightFive,
    goldSevenHundred,
    goldCrown,
    goldNineHundred,
    silverEightSevenFive,
    silverNineTwoFive,
  } = req.body;

  Price.create({
    // programs: {
    //     category1: category1,
    //     category2: category2,
    //     category3: category3,
    //     category4: category4,
    //     category5: category5,
    //   monthlyRate: {
    //     category1: monthlyRateCategory1,
    //     category2: monthlyRateCategory2,
    //     category3: monthlyRateCategory3,
    //     category4: monthlyRateCategory4,
    //     category5: monthlyRateCategory5,
    //   },
    //   dailyRate: {
    //     category1: dailyRateCategory1,
    //     category2: dailyRateCategory2,
    //     category3: dailyRateCategory3,
    //     category4: dailyRateCategory4,
    //     category5: dailyRateCategory5,
    //   },
    // },
    // gold: {
    //   threeSevenFive: goldThreeSevenFive,
    //   fiveHundred: goldFiveHundred,
    //   fiveEightFive: goldFiveEightFive,
    //   sevenHundred: goldSevenHundred,
    //   crown: goldCrown,
    //   nineHundred: goldNineHundred,
    // },
    // silver: {
    //   eightSevenFive: silverEightSevenFive,
    //   nineTwoFive: silverNineTwoFive,
    // },

    category1: category1,
    category2: category2,
    category3: category3,
    category4: category4,
    category5: category5,

    monthlyRateCategory1: monthlyRateCategory1,
    monthlyRateCategory2: monthlyRateCategory2,
    monthlyRateCategory3: monthlyRateCategory3,
    monthlyRateCategory4: monthlyRateCategory4,
    monthlyRateCategory5: monthlyRateCategory5,


    dailyRateCategory1: dailyRateCategory1,
    dailyRateCategory2: dailyRateCategory2,
    dailyRateCategory3: dailyRateCategory3,
    dailyRateCategory4: dailyRateCategory4,
    dailyRateCategory5: dailyRateCategory5,

    goldThreeSevenFive: goldThreeSevenFive,
    goldFiveHundred: goldFiveHundred,
    goldFiveEightFive: goldFiveEightFive,
    goldSevenHundred: goldSevenHundred,
    goldCrown: goldCrown,
    goldNineHundred: goldNineHundred,

    silverEightSevenFive: silverEightSevenFive,
    silverNineTwoFive: silverNineTwoFive,

  })
    .then((prices) => res.status(201).send(prices))
    .catch((err) => {
      // if (err instanceof mongoose.Error.ValidationError) {
      //   next(new BadRequest('Переданы некорректные данные при создании цен.'));
      // } else {
      //   next(err);
      // }
      console.error(err);
    })
};

module.exports.getPrices = (req, res, next) => {
  Price.find()
    .then((prices) => res.status(200).send(prices))
    .catch(next);
};


module.exports.updatePrices = (req, res, next) => {
  const {   category1,
    category2,
    category3,
    category4,
    category5,
    monthlyRateCategory1,
    monthlyRateCategory2,
    monthlyRateCategory3,
    monthlyRateCategory4,
    monthlyRateCategory5,
    dailyRateCategory1,
    dailyRateCategory2,
    dailyRateCategory3,
    dailyRateCategory4,
    dailyRateCategory5,
    goldThreeSevenFive,
    goldFiveHundred,
    goldFiveEightFive,
    goldSevenHundred,
    goldCrown,
    goldNineHundred,
    silverEightSevenFive,
    silverNineTwoFive,
  _id } = req.body;
  Price.findByIdAndUpdate(_id, {
    category1,
    category2,
    category3,
    category4,
    category5,
    monthlyRateCategory1,
    monthlyRateCategory2,
    monthlyRateCategory3,
    monthlyRateCategory4,
    monthlyRateCategory5,
    dailyRateCategory1,
    dailyRateCategory2,
    dailyRateCategory3,
    dailyRateCategory4,
    dailyRateCategory5,
    goldThreeSevenFive,
    goldFiveHundred,
    goldFiveEightFive,
    goldSevenHundred,
    goldCrown,
    goldNineHundred,
    silverEightSevenFive,
    silverNineTwoFive}, { new: true, runValidators: true, context: 'query' })
    .then((prices) => {
      res.send({ prices });
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        next(new BadRequest('Переданы некорректные данные при обновлении цен.'));
      } else {
        next(err);
      }
    });
};

