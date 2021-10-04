const User = require("../models/User");
const bcrypt = require("bcrypt");
const registerController = async (request, response) => {
  const { username, email, password } = request.body;
  User.findOne({ email: request.body.email })
    .then((user) => {
      if (user) {
       return  response.status(400).json({ msg: "user alreadey exist" });
      } else {
        const newUser = new User({
          username: username,
          email: email,
          password: password,
        });
        bcrypt.hash(password, 10).then((hashedPassword) => {
          newUser.password = hashedPassword;
        });
        newUser
          .save()
          .then((user) => {
            response.json(user);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = { registerController };
