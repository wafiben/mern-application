const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const { registerController } = require("../controllers/userController");
const router = express.Router();
router.post(
  "/register",
  body('username','invalid username').isString(),
  body("email",'invalid email').isEmail(),
  body("password","password must be 6 character at least").isLength({ min: 5 }),
  registerController
);
router.put("/createuser/:id", (request, response) => {
  User.findByIdAndUpdate(request.params.id, request.body, { new: true })
    .then((data) => {
      console.log("modifing user");
      response.send("user is modified " + data);
    })
    .catch((error) => {
      console.log(error);
      response.send(error);
    });
});
router.get("/users", (request, response) => {
  User.find()
    .then((data) => {
      response.send(data);
    })
    .catch((error) => {
      console.log(error);
      response.send(error);
    });
});

module.exports = router;
