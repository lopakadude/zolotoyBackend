const router = require('express').Router();
const NotFoundError = require('../errors/NotFoundError');

router.use('/users', require('./users'));
router.use('/reviews', require('./reviews'));
router.use('/prices', require('./prices'));

router.use('*', (req, res, next) => {
  next(new NotFoundError('Маршрут не найден'));
});

module.exports = router;
