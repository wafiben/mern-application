const express=require('express');
const mongoose=require('mongoose')
const app=express()
const dotenv=require('dotenv');
const userRoute=require('./routes/userRoute');
const PORT=process.env.PORT||8080
dotenv.config();
app.use(express.json());
app.use('/user',userRoute);
 mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
  }).then(()=>{
    console.log('connected success to the database')
  })
  .catch((error)=>{
    console.log(error)
  }) 

 app.listen(PORT,(error)=>{
  if(error){
    console.log(error)
  }
   console.log('server is running on port '+PORT)
})  
