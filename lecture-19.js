//This is lecture no 19 routing parameters request and response.
const express=require('express');
const app=express();

app.get('',(req,res)=>{
    console.log("Browser send the data=>",req.query.name);
    // res.send("This is Home Page!!");
    res.send("Welcome dudu!!"+req.query.name);
})
app.get('/about',(req,res)=>{
    res.send("This is about Page!!");
})
app.get('/services',(req,res)=>{
    res.send("This is Services Page!!");
})
app.listen(4200,()=>{
    console.log("This port is running at 4200");
})