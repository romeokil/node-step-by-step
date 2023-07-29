//This is lecture no 20 in which we are rendering html pages via creating html files.
//Esme ek problem hai baar baar hmko url me page ka type likhna pd raha hai jaise .html
//Toh wo extension se kaise remove kr skte hai wo next lecture me dekhege.

const express=require('express');
const path=require('path');
const app=express();

const usePath=path.join(__dirname);
// console.log(usePath);        //Just checking the current Path it is pointing.

app.use(express.static(usePath));

app.listen(8000,()=>{
    console.log("This Port is running at 8000");
})

