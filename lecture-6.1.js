//core modules are the by default features
//global modules jisko import krne ka jarurat na pde example-->console,__dirname,__filename.
//non global modules jisko import krne ka need hai otherwise undefined dikhaega.example-->fs.

console.log("hello baby!!");
console.log("This is the directory name ",__dirname);
console.log("This is the file name ",__filename);
const fs=require("fs");
fs.writeFileSync("hello.txt","This file consist of lecture-6 produced with the help of writeFileSync");