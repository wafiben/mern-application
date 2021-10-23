const jwt = require("jsonwebtoken");
const authMiddelware=async (request,response,next)=>{
    const token=request.header('token');
    const verifyToken=jwt.verify(token,process.env.secret)
    if(!verifyToken){
       return  response.status(401).json({message:'you are not authorized'})
    }
   request.userId=verifyToken.id
     next(); 
    console.log(verifyToken)

}
module.exports=authMiddelware;