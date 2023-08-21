const dbConnect=require('./mongodb')
const express=require('express')
const app=express()
app.use(express.json());

app.get('/',async (req,res)=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data)
    res.send(data)
})
app.post('/',async(req,res)=>{
    let data=await dbConnect();
    // console.log(data)
    let result= await data.insertOne(req.body)
    res.send(result);
})

app.listen(4500,()=>{
    console.log("Port running at 4500")
})