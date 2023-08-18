//This is the insert.js file in which we are inserting the data to the ecom data and product collection 
const dbConnect=require('./mongodb');

const insert=async ()=>{
    const db= await dbConnect();
    let data=db.insertOne({
        name:"Lava 333",
        brand:"Lava",
        price:500,
        category:"mobiles"
    })
}
insert();