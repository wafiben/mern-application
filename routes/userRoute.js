const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/User");
const {registerController}=require('../controllers/userController')
const router = express.Router();
router.post('/register',registerController)
router.post("/createuser", (request, response) => {
  const { username,email, password } = request.body;
  const newUser = new User({ email, password })
    .save()
    .then((data) => {
      console.log("this user was successfully saved ");
      response.status(200);
      response.json.send("user is registred " + data);
    })
    .catch((error) => {
      response.status(400);
      response.send(error);
    });
});
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
