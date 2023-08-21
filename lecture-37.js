const dbConnect=require('./mongodb')
const express=require('express')
const app=express()
app.use(express.json());

app.get('/',async (req,res)=>{                //get api method is used for getting the data from the database
    let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data)
    res.send(data)
})
app.post('/',async(req,res)=>{                //post api method is used for inserting new entries in the database
    let data=await dbConnect();
    // console.log(data)
    let result= await data.insertOne(req.body)
    res.send(result);
})
app.put('/',async(req,res)=>{
    let data=await dbConnect();                //put api method is used for updating thing but with static data
    let result=await data.updateOne(
        {name:"Iphone 15"},{$set:{price:1000}}
        )
    console.log(req.body);
    res.send({result:"Updated"})
})

app.put('/:name',async(req,res)=>{
    let data=await dbConnect();                //put api method is used for updating thing but with dynamic data(name)
    let result=await data.updateOne(            //Using the Parameters
        {name:req.params.name},{$set:req.body}
        )
    console.log(req.body);
    res.send({result:"Updated"})
})

app.put('/',async(req,res)=>{
    let data=await dbConnect();                //put api method is used for updating thing but with dynamic data(name)
    let result=await data.updateOne(
        {name:req.body.name},{$set:req.body}
        )
    console.log(req.body);
    res.send({result:"Updated"})
})
app.listen(4500,()=>{
    console.log("Port running at 4500")
})