//Introduction to mongoose
//Esme hmko ye pata chala ki ye dono mtlb ek saath kaam krta hai pehle Schema bnaate hai uske baad model.
const mongoose=require('mongoose');

const main=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
    const ProductSchema=new mongoose.Schema({
        name:String,
        price:Number,
        model:String
    });

const ProductsModel=mongoose.model('products',ProductSchema);
let data =new ProductsModel({name:"m10",price:15000,model:"m52 galaxy"});
//Abhi hmlog bs static data ke liye use kr rhe ye validation ko aage dynamic ke liye dekhege.
let result=await data.save();
console.log(result);
}

main();