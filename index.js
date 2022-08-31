const express=require('express');
const app=express();
const port=4000;

const user=require('./routes/user')

app.use(express.json())
app.use('/user',user)

//connect mongo db
const mongoose=require("mongoose")
const url='mongodb://localhost/express'
mongoose.connect(url, { useNewUrlParser: true })
const con=mongoose.connection;
con.on("open",()=>{
    console.log("mongo db connected")
})

app.get('/',(req,res)=>{
    console.log("get request has come")
    res.send('hello mongo')
})
app.listen(port,()=>{
    console.log(`app staring on ${port}`)
})


