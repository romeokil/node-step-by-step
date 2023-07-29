//This is lecture no 26 and covering single Routing bs ek ya phir 2 routing ke liye hai.
const express=require('express');
const app=express();

const reqFilter=(req,res,next)=>{ 
    // console.log("reqFilter");
    if(!req.query.age){ 
        res.send("Please Provide an age!!");  
    }
    else if(req.query.age<18){
        res.send("Not an eligible age to visit Page!"); 
    }
    else{
         next();    
    }
}

// app.use(reqFilter);   //Commenting because it is single routing pura me ni krna hai.

app.get('',(req,res)=>{
    res.send("This is Home Page!!");
})

app.get('/Users',reqFilter,(req,res)=>{     //Jis waaale pe lgana hai bs usme ye variable ko bich me daal do ho jaega.
    res.send("This is Users Page!!")   
})

app.get('/About',(req,res)=>{
    res.send("This is About Page!!");
})

app.get('/Services',(req,res)=>{
    res.send("This is Services Page!!");
})

app.listen(4200,()=>{
    console.log("Server running at port 4200");
})