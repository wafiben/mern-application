const express = require("express");
const{postPosts ,getPosts ,updatePost,deletePost} =require('../controllers/postController')
const authMiddleware=require('../middleware/authMiddleware')
const router = express.Router();
router.post('/' ,authMiddleware ,postPosts);
router.put('/:id',authMiddleware,updatePost)
router.get('/',getPosts);
router.delete('/:id',authMiddleware,deletePost);

module.exports=router