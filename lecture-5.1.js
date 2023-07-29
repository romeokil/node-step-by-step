//Lec-5------------------------->
//Importing the values of x,y and z
//The variable name should same as file name so that we could know these data are coming from these files
const index=require('./lecture-5.2')
console.log(index.z())

//Use of filter function studied in javascript lectures.
const arr=[10,20,30,40,50,60,20,30,50]
const result=arr.filter((item)=>item===50)
const result1=arr.filter((item,index)=>{
    
    if(index%2==0)
     return item
})
for(let i=0;i<arr.length;i++){
    console.log(i)
}
console.log(result)
console.log(result1)
let a=10;

console.log(a);