//Lecture-16 
//Introduction to Promise and how to handle the asynchronous things.

const a=10;
let b=0;

let latedata=new Promise((resolve,reject)=>{ //Promise me do parameters ek resolve and reject.
         setTimeout(()=>{
            resolve(30);       //isme kuch bhi data pass kr skte hai array,number,strings 
         },2000);
})

latedata.then((data)=>{     //agr tmko data mil gy es liye then use kiye hai toh bhai apna main kaam likho isme ki 
    b=data;                  //Ky operation krna hai.
   console.log(a+b);
})