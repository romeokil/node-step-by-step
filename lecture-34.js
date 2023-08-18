//This is delete.js file in which we are deleting some items.
const dbConnect=require('./mongodb');

const deletData=async ()=>{
    let data= await dbConnect();
    let result=await data.deleteOne({name:'samsung s23 ultra'})  //we are deleting the single data. we can delete multiple data also. ye jo result hai wo promise return krega eslie await lga diye hai.
}

deletData();