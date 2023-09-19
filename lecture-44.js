//This is lecture no 44.js in which we uplaod file via multer package.
//This is the lecture-43 in which we are learing how to uplaod files 
//ek image aaaya hoga niche dekho wo hmlog upload kiye hai upload folder ke andr.
//Ye file bs ye info dene ke liye bnae hai.
//and jo upload wala file hai wo lecture-44.js me likha hua hai.
const express=require('express')
const multer=require('multer')
const app=express();

//Hmlogo ko yaha pe post route use krna hai. Yaad rkhna.
const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"upload",)
        },
        filename:function(req,file,cb){
            cb(null,file.fieldname+"-"+Date.now+".jpg")
        }
    })
}).single("user_file");
app.post('/upload',upload,(req,res)=>{
    res.send("File Uploaded")
})

app.listen(5000,()=>{
    console.log("Port is running at 5000")
})