const express=require('express');
const mongoose=require('mongoose')
const app=express()
const dotenv=require('dotenv');
const result=dotenv.config()
if (result.error) {
    throw result.error
  }
  
  console.log(result.parsed)
  app.listen(process.env.adress,()=>{
   console.log('server is running on port '+process.env.PORT)
})  