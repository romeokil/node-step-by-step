//This is update.js file of the series because we are updating the data of the some collection .
const dbConnect=require('./mongodb');

const updateData=async ()=>{
    let data=await dbConnect();
    console.log(data)
    let result=data.updateOne(
        {name:'samsung s22 ultra'},{
            $set:{name:'samsung s23 ultra'}
        }
    )
}
updateData();