require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const auth = require('./middlewares/auth');
const celebrates = require('./middlewares/celebrates');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const cors = require('./middlewares/cors');

const app = express();

const { PORT = 3001, DB_URL = 'mongodb://127.0.0.1:27017/zolotoydb' } = process.env;

const { createUser, login } = require('./controllers/users');

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
});

app.use(helmet());

app.use(express.json());

app.use(cors);

app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signin', celebrates.login, login);

app.post('/signup', celebrates.createUser, createUser);

app.use('/',  require('./routes/index'));

app.use(errorLogger);

app.use(errors());
app.use(require('./middlewares/centralError'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
