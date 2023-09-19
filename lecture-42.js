//This is lecture no 41 in which we are making connection es lecture me hmlog get api ka use krege
//Pehle bhi use kiye hue hai lekin isme ye scene hai ki npm packgae install krke kiye the 
//But es waaale me hmlog mongoose waale se try krege ye saara api.
//Ye main index js waala file hai or 2 files or bhi iske related first config.js and second product.js
//Config.js waale me hmlog connection established kiye hai or product.js me product ka schema and model bnae hai
// or phir model ko export kr diye joki hmlog yaha pe recieve krege.

//Hmlog esme postman se data send kr rhe hai or database me new fields or entity daal rhe hai.
//postman me jo body section hai usme json select krke hmlog data bhej rhe hai or insert kr de rhe hai.
//find operation jo hai wo promise return krta hai.

const express=require('express')
const config=require('./config')
const product=require('./product')
const app=express();

app.use(express.json()) //qki hmlog jo data get kr rhe hai wo string format me hai toh usko json me convert krna hai

app.post("/create",async (req,res)=>{
    let data=new product(req.body)        //new data insert kr liye 
    let result=await data.save();
    console.log(result)
    res.send(result);
})

app.get('/list',async (req,res)=>{        //isme data get kr liye 
    let data=await product.find();
    console.log(data);
    res.send(data);
})

app.delete('/delete/:_id',async(req,res)=>{  //Agr tmko id ke through delete krna hai toh bs /:_id likhna pdega route me.
    console.log(req.params);            //req.params krke tmko id mil jaega and uska use krke tm aaram se delete kr skta hai aaram se.
    let data=await product.deleteOne(req.params)
    res.send(data)
})

app.put('/update/:_id',async(req,res)=>{
    let data=await product.updateOne(
        req.params,
        {$set:req.body}
    )
        console.log(data)
})

app.listen(5000,()=>{
    console.log("Port is running at port 5000")
})