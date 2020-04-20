require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const userRouter = require('./user/user-router');

const app = express();

const morganOption = 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/user', userRouter);

app.use(function errorHandler(error, req, res, next) {
  let response;
  return res.status(500).json(response);
});

module.exports = app;