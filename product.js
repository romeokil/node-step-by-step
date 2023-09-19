//This is lecture no 41 in which we are making connection es lecture me hmlog get api ka use krege
//Pehle bhi use kiye hue hai lekin isme ye scene hai ki npm packgae install krke kiye the 
//But es waaale me hmlog mongoose waale se try krege ye saara api.
const mongoose=require('mongoose')
const ProductSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})

module.exports=mongoose.model('products',ProductSchema);
