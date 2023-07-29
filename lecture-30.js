//This is lecture no 30
//Previous lectures me basically mongodb compass ke terminal me wo chizen kr rha tha eslie gayab hai lectures.
const {MongoClient}=require('mongodb');
//OR
// const MongoClient=require('mongodb').MongoClient;
const url='mongodb://127.0.0.1:27017';  //Url ko store kr liye
const database='e-comm';             //database ka naam
const database2='harykart';
const client=new MongoClient(url);    //Or mongoClient ko url toh dena pdega ni toh pta kaise chalega.

async function getData(){
    let result=await client.connect();
    let db=result.db(database);//Jo result mil rha hai wo kon sa database ka hai wo btana pdega na.
    let collection=db.collection('products');//Ab database ka kon sa collection hai wo bhi toh dekhna pdega
    let response=await collection.find({}).toArray();  //agr direct esko console krte toh promise return kr rha tha eslie hmlog await lgae toh promise apne aap handle ho gy.
    let result2=await client.connect();
    let db2=result2.db(database2);
    let collection2=db2.collection('item');
    let response2=await collection2.find({}).toArray();
    console.log("Data fetch by product collection in database e-com-->");
    console.log(response);
    console.log("Data fetch by item collection in database harykart-->");
    console.log(response2);
}

getData();//Calling the function


