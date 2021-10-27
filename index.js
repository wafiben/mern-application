const express=require('express');
const mongoose=require('mongoose')
const app=express()
const dotenv=require('dotenv');
const userRoute=require('./routes/userRoute');
const postRoute=require('./routes/postRoute');
const cors = require('cors');
const PORT=process.env.PORT||5000;
dotenv.config();
app.use(cors());
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/user',userRoute);
app.use('/post',postRoute);
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
})  ;

