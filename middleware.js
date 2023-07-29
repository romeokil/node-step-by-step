//This file belongs to 26.2 jaha pe hmlog different file se middleware ko access krne ka koshish kr rhe the.
//Different file me middleware bnana eslie jaruri h kyuki middleware bht saare ho skte hai.
module.exports=(req,res,next)=>{ 
    // console.log("reqFilter");
    if(!req.query.age){ 
        res.send("Please Provide an age!!");  
    }
    else if(req.query.age<18){
        res.send("Not an eligible age to visit Page!"); 
    }
    else{
         next();    
    }
}