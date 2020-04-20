const express = require('express');
const UserService = require('./user-service');

const userRouter = express.Router();
const jsonParser = express.json();

userRouter
  .route('/')
  .get((req,res,next) => {
    const db = req.app.get('db');

    UserService.getUserInfo(db)
      .then(users => {
        return res.status(200).json(users);
      })
      .catch(next);
  })
  .post(jsonParser, (req,res,next) => {
    let { email, full_name, username, password } = req.body;
    
    const newUser = { email, full_name, username, password };
    const db = req.app.get('db');

    UserService.postUserInfo(db, newUser)
      .then(() => {
        return res.status(201).end();
      });
  });

module.exports = userRouter;