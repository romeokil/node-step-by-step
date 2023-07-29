//This is lecture no 18.
//Isme thoda express ka introduction liye hai.
const express=require('express')   //express module ko export kr diye but abhi executable nhi hai.
const app=express();                //es line ke baad ab executable ho gy.

app.get('',(req,res)=>{            //kuch ni likhe h mtlb ki home page.
   res.send("This is home Page")
})
 
app.get('/about',(req,res)=>{      //ye about page hai.
    res.send("This is about Page!!")
})

app.get('/services',(req,res)=>{      //ye services page hai.
    res.send("This is Services Page!!") 
})  

app.listen(4200,()=>{                 //ab usko listen bhi toh krna pdega ni toh kaise kaaam chalega.
    console.log("Server Running at port 4200");
})