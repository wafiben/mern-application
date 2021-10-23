const mongoose = require("mongoose");
let postSchema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  descreption: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
  image: {
    type: String,
    default:'http://www.snut.fr/image-de-nature/'
  },
});
module.exports = mongoose.model("post", postSchema);
