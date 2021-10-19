const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/User");
const router = express.Router();
router.post('/addPost',postController);
module.exports=router