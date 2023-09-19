//This is lecture no 43 in which we are learning for search api.
//search hmlog single field ya multiple field ke bhi saaath kr skte hai depend on us.
//dekho logic yhi tha ki find hmko saara data deta hai bs hm regex laga ke usko aaram se single
//,multiple field ke liye search kr lega.
const express=require('express')
const config=require('./config')
const product=require('./product')
const app=express();

app.use(express.json()) 

app.get('/search/:key',async(req,res)=>{
    console.log(req.params.key)
    let data=await product.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}}, //agr single field krna chahte hai toh wo krlo
                {"brand":{$regex:req.params.key}}, //agr mutliptle field krna chahta hai toh aise(comma,)
                {"category":{$regex:req.params.key}}// lga ke daal do
            ]
        }
    );
    res.send(data)
})


app.listen(5000,()=>{
    console.log("Port is running at 5000")
})