const express = require("express");
const authRouter = express.Router();
const User = require('./../models/User.model');
/*const zxcvbn = require('zxcvbn');*/

const bcrypt = require("bcrypt");
const saltRounds = 10;

authRouter.get("/signup", (req, res, next) => {
    res.render("auth-views/signup-form");
  });



