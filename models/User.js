const mongoose = require("mongoose");
let userSchema = mongoose.Schema({
  email: {
    required: true,
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ],
  },
  password:{
      required:true,
      type:String,
      match:[
        /(?=.{8,})/,
        "The password must be eight characters or longer"
      ]
  }
});
module.exports=mongoose.model('user',userSchema)
