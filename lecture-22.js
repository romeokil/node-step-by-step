const express=require('express');
const path=require('path');
const app=express();

const filePath=path.join(__dirname);

app.get('/',(_,res)=>{
     res.sendFile(`${filePath}/index.html`);
})
app.get('/about',(_,res)=>{
    res.sendFile(`${filePath}/about.html`)
})
app.get('/services',(_,res)=>{
    res.sendFile(`${filePath}/services.html`);
})
app.get('*',(_,res)=>{
    res.sendFile(`${filePath}/pagenotfound.html`)
})
app.listen(4500,()=>{
    console.log("Port running at 4500");
})