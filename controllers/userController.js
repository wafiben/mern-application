const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const registerController = async (request, response) => {
  const errors = validationResult(request);
  if (errors.errors.length !== 0) {
    return response.status(400).json({ errors });
  }
  const { username, email,phone,adress, password } = request.body;
  User.findOne({ email: request.body.email })
    .then((user) => {
      if (user) {
        return response.status(400).json({ msg: "user alreadey exist" });
      } else {
        bcrypt.hash(password, 10).then((hashedPassword) => {
          const newUser = new User({
            username: username,
            email: email,
            phone:phone,
            adress:adress,
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
              response.json({ user: user, token: token });
            })
            .catch((error) => {
              response.status(500).json({message:error})
            });
        });
      }
    })
    .catch((error) => {
      response.status(500).json({ msg: error });
    });
};
const loginController = async (request, response) => {
  const { username, email, password } = request.body;
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return response.status(400).json({ msg: "you must register before" });
      } else {
        bcrypt
          .compare(password, user.password)
          .then((result) => {
            console.log(result);
            if (result === false) {
              response.status(400).json({ msg: "wrong password  try again" });
            } else {
              var token = jwt.sign(
                {
                  username: user.username,
                  email: user.email,
                  id: user._id,
                },
                process.env.secret
              );
              response.status(500).json({ user: user, token: token });
            }
          })
          .catch((error) => {
            response.status(400).json({ message: error });
          });
      }
    })
    .catch((error) => {
      response.status(500).json({ msg: "hello" });
    });
};
module.exports = { registerController, loginController };
