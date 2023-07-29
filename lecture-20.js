//This is lecture no 20 rendering html and json formats(basically jo object bna ke krte hai.)
const express=require('express');
const app=express();

app.get('',(req,res)=>{
   res.send(`<h1>Welcome to Home Page!!</h1>
   <a href="/about">Go to About Page</a>
   <a href="/services">Go to Services Page</a>`);
})
app.get('/about',(req,res)=>{
    res.send(`<input type="text" placeholder="Enter Your Name" value=${req.query.name}></input> 
    <button>Click Me</button>
    <a href="/">Go Back to Home Page</a>`);
})
app.get('/services',(req,res)=>{
    res.send(`This is Services Page
    [{
        name:Rahul,
        email:rahulkumarjha58978@gmail.com
    },
    {
        name:Shashank,
        email:yshashank069@gmail.com
    }
]
    <a href="/">Go Back to Home Page</a>`);
})

app.listen(5000,()=>{
    console.log("Server running at port 5000");
})