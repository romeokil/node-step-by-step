//This is lecture no 15

//Synchronous:-Only one task is executed at a time that means other tasks have to wait for the execution of the first task.
//Asynchrnous:-Others task is not waiting for the execution of first task to complete.They are executing parallely.

// Example of synchronous Code
// console.log("Starting Code");

// console.log("Execution in the process");

// console.log("Completed Execution");

//Example of Asynchrnous Code 
//Drawback of the Asynchronous Code is the value of b is executed but not shown in the result.
//because after 2 second the value upgradation statement is executed.
//In next lecture we will see how to handle this drawback of nodejs asynchronous behaviour.
let a=10;
let b=0;

setTimeout(()=>{
    b=20;
},2000);

console.log(a+b);