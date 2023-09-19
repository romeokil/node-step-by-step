//Basically es lecture me hmlog crud operation perform krege.
//Toh esme hmlog mongoose ke help se kaise data update,delete,find sbkuch kr skte hai or esme chizen aasan hai.
const mongoose=require('mongoose')


    mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
    const ProductSchema=new mongoose.Schema({
        name:String,
        price:Number,
        brand:String,
        category:String
    })
    const saveinDb= async ()=>{
    const ProductsModel=mongoose.model('products',ProductSchema)
    const data=new ProductsModel({
    name:"m24",
    price:300,
    brand:"micromax",
    category:"mobiles"})
    const result=await data.save();
    console.log(result)
}

    const updateinDb=async ()=>{                     //Toh dekho yha se hmlog data update aaram se kr liye.
        const Products=mongoose.model('products',ProductSchema);
        let data=await Products.updateOne(
            {name:"Iphone 12"},
            {
            $set:{price:1200}                            //Basically syntax ka bs dhyan rkhna
            }
            )
            console.log(data)
    }

    const deleteinDb=async()=>{                          //Toh ye dekho yha se successfully delete kr diye data
        const Products=mongoose.model('products',ProductSchema)
        let data=await Products.deleteMany({name:"m10"})    //deletecount check krna pata chal jaega kitna entries delete hua hai.
        console.log(data)
    }

    const findinDb=async ()=>{                           //Jitna bhi entries hai un sbko dikhaane ke liye.
        const Products=mongoose.model('products',ProductSchema)
        let data=await Products.find({name:"Iphone 12"});
        console.log(data)
    }
    findinDb();
