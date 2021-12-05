const express = require("express");
const{postPosts ,getPosts ,updatePost,deletePost} =require('../controllers/postController')
const authMiddleware=require('../middleware/authMiddleware')
const router = express.Router();
const multer=require('multer');
const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-'+file.originalname)
    }
  })
  const upload = multer({ storage: storage })
router.post('/' ,authMiddleware,upload.single('image') ,postPosts);
router.put('/:id',authMiddleware,updatePost)
router.get('/',getPosts);
router.delete('/:id',authMiddleware,deletePost);

module.exports=router


