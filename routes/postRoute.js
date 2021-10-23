const mongoose = require("mongoose");
const express = require("express");
const User = require("../models/User");
const{postController} =require('../controllers/postController')
const authMiddleware=require('../middleware/authMiddleware')
const router = express.Router();
router.post('/addPost',authMiddleware ,postController);
module.exports=router