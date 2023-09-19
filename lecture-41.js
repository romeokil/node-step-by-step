//This is lecture no 41 in which we are making connection es lecture me hmlog get api ka use krege
//Pehle bhi use kiye hue hai lekin isme ye scene hai ki npm packgae install krke kiye the 
//But es waaale me hmlog mongoose waale se try krege ye saara api.
//Ye main index js waala file hai or 2 files or bhi iske related first config.js and second product.js
//Config.js waale me hmlog connection established kiye hai or product.js me product ka schema and model bnae hai
// or phir model ko export kr diye joki hmlog yaha pe recieve krege.

//Hmlog esme postman se data send kr rhe hai or database me new fields or entity daal rhe hai.
//postman me jo body section hai usme json select krke hmlog data bhej rhe hai or insert kr de rhe hai.

const express=require('express')
const config=require('./config')
const product=require('./product')
const app=express();

app.use(express.json()) //qki hmlog jo data get kr rhe hai wo string format me hai toh usko json me convert krna hai

app.post("/create",async (req,res)=>{
    let data=new product(req.body)
    let result=await data.save();
    console.log(result)
    res.send(result);
})

app.listen(5000,()=>{
    console.log("Port is running at port 5000")
})