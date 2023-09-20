//This is lecture no 46 in which we learn about event and event emitter.
const express=require('express')
const eventEmitter=require('events') //events bhi ek trah ka inbuilt module.
const event=new eventEmitter()

const app=express()

let count=0;
event.on("CountApi",()=>{
    count++;
    console.log(`Countapi hit ${count} times`);
})

app.get('/home',(req,res)=>{
    res.send("get home api called!!")
    event.emit("CountApi")

})
app.get('/upload',(req,res)=>{
    res.send("get upload api called!!")
    event.emit("CountApi")
})
app.get('/services',(req,res)=>{
    res.send("get services api called!!")
    event.emit("CountApi")
})

app.listen(5000,()=>{
    console.log("Port is running at 5000")
})
