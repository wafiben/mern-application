const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const registerController = async (request, response) => {
  const errors = validationResult(request);
  if (errors.errors.length !== 0) {
    return response.status(400).json({ errors });
  }
  const { username, email, password } = request.body;
  User.findOne({ email: request.body.email })
    .then((user) => {
      if (user) {
        return response.status(400).json({ msg: "user alreadey exist" });
      } else {
        bcrypt.hash(password, 10).then((hashedPassword) => {
          console.log(hashedPassword);
          const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
          });
          var token = jwt.sign(
            {
              username: newUser.username,
              email: newUser.email,
              id: newUser._id,
            },
            process.env.secret
          );
          newUser
            .save()
            .then((user) => {
              response.json({ user, token });
            })
            .catch((error) => {
              console.log(error);
            });
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
const loginController = async (request, response) => {
  const { email, password } = request.body;
  User.findOne({ email: request.body.email }).then((user) => {
    if (!user) {
      response.status(400).json({ msg: "you must register before" });
    } else {
      bcrypt.compare(password, user.password);
    }
  });
};
module.exports = { registerController };
