const { celebrate, Joi } = require('celebrate');
Joi.objectId = require('joi-objectid')(Joi);

module.exports.login = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.createUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  }),
});

module.exports.getUser = celebrate({
  params: Joi.object().keys({
    userId: Joi.objectId().required(),
  }),
});


module.exports.createReview = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    review: Joi.string().required().min(10).max(450),
    grade: Joi.number().required(),
  }),
});

module.exports.checkIdReview = celebrate({
  params: Joi.object().keys({
    cardId: Joi.objectId().required(),
  }),
});

module.exports.createPrices = celebrate({
  body: Joi.object().keys({
    _id: Joi.string(),
    category1: Joi.string().required().min(8).max(30),
    category2: Joi.string().required().min(8).max(30),
    category3: Joi.string().required().min(8).max(30),
    category4: Joi.string().required().min(8).max(30),
    category5: Joi.string().required().min(8).max(30),
    monthlyRateCategory1: Joi.string().required(),
    monthlyRateCategory2: Joi.string().required(),
    monthlyRateCategory3: Joi.string().required(),
    monthlyRateCategory4: Joi.string().required(),
    monthlyRateCategory5: Joi.string().required(),
    dailyRateCategory1: Joi.string().required(),
    dailyRateCategory2: Joi.string().required(),
    dailyRateCategory3: Joi.string().required(),
    dailyRateCategory4: Joi.string().required(),
    dailyRateCategory5: Joi.string().required(),
    goldThreeSevenFive: Joi.string().required(),
    goldFiveHundred: Joi.string().required(),
    goldFiveEightFive: Joi.string().required(),
    goldSevenHundred: Joi.string().required(),
    goldCrown: Joi.string().required(),
    goldNineHundred: Joi.string().required(),
    silverEightSevenFive: Joi.string().required(),
    silverNineTwoFive: Joi.string().required(),
  }),
});
