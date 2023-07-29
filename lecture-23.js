const express=require('express');
const path=require('path');

const app=express();
const filePath=path.join(__dirname);

app.set('view engine','ejs');

app.get('',(__,res)=>{
    res.sendFile(`${filePath}/index.html`)
})
app.get('/about',(__,res)=>{
    res.sendFile(`${filePath}/about.html`);
})
app.get('/services',(__,res)=>{
    res.sendFile(`${filePath}/services.html`);
})
app.get('/profile',(__,res)=>{
    const user={
        name:'rahul',
        email:'rahulkumarjha58978',
        city:'noida'
    }
    res.render('profile',{user});
})
app.listen(5000,()=>{
    console.log("Port is running at 5000");
})