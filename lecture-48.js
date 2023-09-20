const mysql=require('mysql')

//Here we are making connection with some fields.
const conn=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"",
    database:"rahul"
});

//This is only for checking whether connection is established or not.
conn.connect((err)=>{
    if(err){
        console.log("Error",err)
    }
    else{
        console.log("Connection done!!")
    }
})

conn.query("select * from employee",(err,res)=>{
    console.log("RESULT",res)
})
