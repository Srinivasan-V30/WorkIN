const express= require('express')
require('dotenv').config()
const workoutRoute=require('./routes/workout')
const mongoose = require("mongoose")

const app=express()
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("Connected to DB and Listening to 4000");
        })
    })
    .catch((error)=>{
        console.log(error)
    })

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });    
//middleware 
app.use(express.json())
//middleware logger
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
})


app.use('/workout',workoutRoute)



