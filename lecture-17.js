//Lecture no 17 how node js works 
//wo cycle aise chlta hai pehle call stack->node apis(optional functions only for c/c++)->callback queue.
console.log("Starting Code!!!");

setTimeout(()=>{
    console.log("0 second lag")
})

setTimeout(()=>{
    console.log("2 second lag")
})

console.log("Finishing Code!!!")