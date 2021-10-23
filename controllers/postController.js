const { request } = require("express");
const User = require("../models/User");
const post = require("../models/Post");
const bcrypt = require("bcryptjs");
const postController = async (request, response) => {
  const { model, descreption, price } = request.body;
  const newPost = new post({
    model: request.body,
    descreption: descreption,
    price: price,
    owner: request.userId,
  });

  response.json(newPost);
};
module.exports = { postController };
