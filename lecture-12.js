//This is lecture-12 learing input from command line.
// console.log(process.argv); //ek module type ka hai jisme bht saara property,function hai
// console.log(process.argv[3]);  //trying to access the 4th element in the array.


const fs=require('fs'); //file system ka kaam kr rhe eslie esko import krna pdega
const input=process.argv; //array ko hmlog variable me assign kr de rhe hai
 
if(input[2]=='add'){      //input[2] me hmlog add or remove likh  rhe hai 
    fs.writeFileSync(input[3],input[4]); //input[3] me hmlog file ka name likh rhe hai and input[4] me file ka content
}
else if(input[2]=='remove'){   
    fs.unlinkSync(input[3]);
}
else{
    console.log("Invalid Input"); //agr input[2] me add or remove ke alawa kuch likha toh invalid input dikhaega
}