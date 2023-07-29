
//This is lecture no 26.3 basically hmko 3-4 ke upr lgana hai toh ab hr time reqFilter toh ni likhte rhege toh 
//Uske liye apne pass tarika hai route.get wala.
const express=require('express');
const reqFilter=require('./middleware')
const app=express();
const route=express.Router();


//Esme app.use niche likhe hai extra me route.use aaya hai.
route.use(reqFilter);   
app.get('',(req,res)=>{
    res.send("This is Home Page!!");
})

app.get('/Users',(req,res)=>{     
    res.send("This is Users Page!!")   
})

route.get('/About',(req,res)=>{               //Jisme jisme use krna hai usme basically route.get kr dena.
    res.send("This is About Page!!");
})

route.get('/Services',(req,res)=>{            //Isme bhi use kiye hai toh isme route.get likhege.
    res.send("This is Services Page!!");
})

app.use('/',route);         //Yha pe app.use ka use kiye hai.

app.listen(4200,()=>{
    console.log("Server running at port 4200");
})