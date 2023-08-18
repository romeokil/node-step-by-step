//Basically hmlog esme get api bna rhe hai or ab isme data extract kr rhe hai mongodb se.
//Or apis me basically hmlog express ka khaafi use krte hai.
const dbConnect=require('./mongodb')
const express=require('express')
const app=express()

app.get('/',async (req,res)=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data)
    res.send(data)
})

app.listen(4500,()=>{
    console.log("Port running at 4500")
})