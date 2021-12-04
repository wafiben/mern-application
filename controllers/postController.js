const mongoose=require('mongoose');
const User = require("../models/User");
const post = require("../models/Post");
const bcrypt = require("bcryptjs");
const postPosts = async (request, response) => {
  const {model, descreption, price } = request.body;
  const newPost = new post({
    model: model,
    descreption: descreption,
    price: price,
    owner: request.userId,
  });
  try{
   await newPost.save();
   response.status(200).json(newPost)
  }
 catch(error){
   response.status(404).json({message:error})
 }
};
const getPosts= async(request,response)=>{
  try{
    const posts=await post.find();
    response.status(200).json(posts)
  }
  catch(error){
    response.status(404).json({message:error})
  }
}
const updatePost=async (request,response)=>{
 try{
  const id=request.params.id
  const post=request.body;
  if(!mongoose.Type.ObjectId.isValid(id)){
    return response.status(400).json({message:'no data with this id'})
  }
  else{
    const updatedPost=await post.findByIdAndUpdate(id, post, { new: true });
    response.status(200).json(updatedPost)
  }

 }catch(error){
   response.status(400).json({message:error})
 }
}
const deletePost=async(request,response)=>{
  const id=request.params.id
  if(!mongoose.Type.ObjectId.isValid(id)){
    return response.status(400).json({message:'no data with this id'})
  }
  else{
    await post.findByIdAndRemove(id);
    response.status(200).json({message:"car is removed"})
  }
}
const likePost=async(request,response)=>{
  const id=request.params.id
  if(!mongoose.Type.ObjectId.isValid(id)){
    return response.status(400).json({message:'no data with this id'})
  }
  else{
    const foundedPost=await post.findById(id);
    post.findByIdAndUpdate(id,{likeCount:foundedPost.likeCount+1},{new:true})
  }
}
module.exports = { postPosts ,getPosts ,updatePost,deletePost,likePost};
