const express = require('express');
 const connect = require('./db');
const app = express();

 require('dotenv').config({
    path:"./env"
 });
 
 const PORT = process.env.PORT||8000;
 const url = process.env.db_url;


 app.listen(PORT,async()=>{
    try{
    await connectDB(url)
    console.log(`Server is running on port ${PORT}`)
}
catch(error){
    console.error(error)
}
 });

 app.get('/',(req,res)=>{
    console.log("Hello world")
 })