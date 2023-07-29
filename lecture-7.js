//This is lecture-7-------------------->

const http=require("http"); //http module nodejs ka request and response handle krta hai

//This is the separate normal function 
// function data(req,res){
//     res.write("<h1>This is the separate function response statement running at port 4500</h1>");
//     res.end();//Server chalu kiya hai toh end bhi krna pdega
// }
// http.createServer(data).listen(4500);



//In this we itself passing the entire function called as callback.
//Arrow function me jb koi function pass kr rhe hai toh parameter daal rhe hai or arrow dekr pura body ka content likh rhe hai
http.createServer((req,res)=>{
    res.write("<h1>This is the response statement running at port 4500</h1>");
    res.end();//Server chalu kiya hai toh end bhi krna pdega
}).listen(4500,()=>{
    console.log("Server is running at port no 4500")
})
