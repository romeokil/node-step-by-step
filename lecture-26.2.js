//This is lecture no 26.2 ky hmlog different file se middleware ko access kr skte hai. toh ha kr skte hai.
const express=require('express');
const reqFilter=require('./middleware')
const app=express();



// app.use(reqFilter);   //Commenting because it is single routing pura me ni krna hai.

app.get('',(req,res)=>{
    res.send("This is Home Page!!");
})

app.get('/Users',reqFilter,(req,res)=>{     //Jis waaale pe lgana hai bs usme ye variable ko bich me daal do ho jaega.
    res.send("This is Users Page!!")   
})

app.get('/About',reqFilter,(req,res)=>{
    res.send("This is About Page!!");
})

app.get('/Services',(req,res)=>{
    res.send("This is Services Page!!");
})

app.listen(4200,()=>{
    console.log("Server running at port 4200");
})