const connect = require('mongoose');
const connectDB = require('express');
const app = express();

app.listen(PORT,async(url)=>{
    try{
    console.log("Connect to datbase")
} catch{
    console.log("Error connecting");
    console.log(error)
}
});

app.get('/',(req,res)=>{
    res.send('connect')
});


module.exports=connectDB