//In the 30th lecture we saw how to read data from database but in this lecture we will learn how to read data 
//in complex way(but it is the most prefreable way and used mostly)
//Or basically hr database ke liye alg alg connection bnana ni hai toh ek general connection bnaege or jitna 
//databases hoga usko connect krte rhege alg se ek dedicated eske liye file bana dete hai.
//Promise handle krege


//This is lecture no 31 in which we are importing the dbConnect function lekin esme find waale me chod ho gy hai kuch
//error aae ja rha hai.

const dbConnect=require('./mongodb');
// const {MongoClient}=require('mongodb')
// const url='mongodb://127.0.0.1:27017'
// const databaseName='e-comm'
// const client=new MongoClient(url);

// async function dbConnect(){   

//     let result=await client.connect();
//     db=result.db(databaseName);
//     collection=db.collection('products');
//     // let data=await collection.find({name:'Iphone 15'}).toArray();
//     // console.log(data);
// }


//------>dbConnect function promise return kr rha hai toh usko promise ya phir async and await se handle kr skte hai


//Yha pe promise se handle kr rhe hai.
dbConnect().then((resp)=>{
    resp.find().toArray((data)=>{
        console.log(data)
    })
})


//Yha pe async and await se handle kr rhe hai.
// const main=async()=>{
//     let data= await dbConnect();
//     data= await data.find().toArray()
//     console.log(data)
// }

// main();