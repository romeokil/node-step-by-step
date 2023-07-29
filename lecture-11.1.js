// This is lecture-11 making a basic api 
const http=require('http');  //neccessary package for creating server
const data=require('./lecture-11.2') //importing data from data file 

http.createServer((req,res)=>{  //createServer function wiil take req,res argument as callback
    res.writeHead(500,{'Content-Type':'application\JSON'})
    res.write(JSON.stringify(data))   //Sayd string ke form me hi leta hai ye data pehle data array of objects tha.
    res.end();
}).listen(4000,()=>{      
    console.log("Port is running at 4000")
})