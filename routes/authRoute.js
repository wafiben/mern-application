const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const { registerController ,loginController} = require("../controllers/AuthController");
const router = express.Router();
router.post(
  "/register",
  body('username','invalid username').isString(),
  body("email",'invalid email').isEmail(),
  body("phone",'invalid phone number').isLength({ min: 8 }),
  body('username','adress').isString(),
  body("password","password must be 6 character at least").isLength({ min: 5 }),
  registerController
);
router.post("/login",loginController);



module.exports = router;
