//This is lecture no 31 in which we are exporting the dbConnect function lekin esme find waale me chod ho gy hai kuch
//error aae ja rha hai.
const {MongoClient}=require('mongodb')
const url='mongodb://127.0.0.1:27017'
const databaseName='e-comm'
const client=new MongoClient(url);

async function dbConnect(){  

    let result=await client.connect();
    db=result.db(databaseName);
    collection=db.collection('products');
    // let data=await collection.find({name:'Iphone 15'}).toArray();
    // console.log(data);
}

module.exports=dbConnect;