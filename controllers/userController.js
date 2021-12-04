const User = require("../models/User");
const mongoose = require("mongoose");
const getAllUsers = async (request, response) => {
  try {
    const users = await User.find();
    if (!users) response.status(404).json({ msg: "no users are registerd" });
    response.status(200).json({ users: users });
  } catch (error) {
    response.status(401).json({ msg: error });
  }
};
const updateUser = async (request, response) => {
  try {
    const id = request.params.id;
    const user = request.body;
    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
    response.status(200).json(updatedUser);
  } catch (error) {
    response.status(400).json({ error: error });
  }
};
const deleteUser=async (request,response)=>{
  const id =request.params.id
  if (!mongoose.Types.ObjectId.isValid(id)) return respnse.status(404).json( {message:`No user with id: ${id}`});
  else{
    await User.findByIdAndRemove(id)
    response.status(200).json({message:'the user was deleted successfully'})
  }

}
module.exports = { getAllUsers, updateUser,deleteUser };
