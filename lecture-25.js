//This is lecture no 25 and we are learning middleware in this lecture kaise usko initialize kiye and kaise use kiye.
//5 Types of middleware
//1.Application level Middleware 2.Router-level Middleware 3.Error-level Middleware 4.Built-in-Middleware 
//5.Third-Party Middleware. hmlog isme application level middleware use kiye hai.
const express=require('express');
const app=express();

const reqFilter=(req,res,next)=>{  //Making of the Middleware(joki 3 parameter leta hai).
    // console.log("reqFilter");
    if(!req.query.age){ 
        res.send("Please Provide an age!!");   //Esme hmlog check kr rhe hai ki url me age daala hai ki ni
    }
    else if(req.query.age<18){
        res.send("Not an eligible age to visit Page!");  //Esme less than 18 agr age hua toh bol dega not eligible.
    }
    else{
         next();     //agr age daala and wo 18 se upr hua tbhi jaake wo forward krega.//Eslie bhi eska naam middleware rkha hai qki 
                     //Qki pehle ye check krta hai agr sara condition shi hua tb aage chizen forward krega.
    }
}

app.use(reqFilter);  //Upr bs bnae hai yha pe use kr rhe hai.

app.get('',(req,res)=>{
    res.send("This is Home Page!!");
})

app.get('/Users',(req,res)=>{
    res.send("This is Users Page!!")
})

app.listen(4200,()=>{
    console.log("Server running at port 4200");
})