const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const ConflictError = require('../errors/ConflictError');
const BadRequest = require('../errors/BadRequest');
const User = require('../models/user');

module.exports.createUser = (req, res, next) => {
  const {
    email, password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      email,
      password: hash,
    }))
    .then(() => res.status(201).send({
      data: {
      email,
      },
    }))
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError(
          `Пользователь с email '${email}' уже существует.`,
        ));
      } else if (err instanceof mongoose.Error.ValidationError) {
        next(new BadRequest('Переданы некорректные данные при создании пользователя.'));
      } else {
        next(err);
      }
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      res.send({
        token: jwt.sign({ _id: user._id }, process.env.NODE_ENV !== 'production' ? 'super-secret' : process.env.JWT_SECRET, { expiresIn: '30d' }),
      });
    })
    .catch((err) => next(err));
};

