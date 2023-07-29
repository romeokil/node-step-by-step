//This is lecture no 14 in which we are doing crud operation in file system.
const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'crud')   //Getting the directory path
const filePath=`${dirPath}/orange.txt`      //Getting the file path
// console.log(dirPath);
// console.log(filePath);

fs.writeFileSync(filePath,"This is orange txt file");//Creating the file orange.txt

// fs.readFile(filePath,'utf8',(err,item)=>{    //Reading File and display the content of that file.
//     if(!err)
//     console.log(item)
// })

// fs.appendFile(filePath,"This is the appended part in the orange.txt file",(err)=>{
//     if(!err) console.log("!File is updated!!");   //Updating the file by appending the content in the previous file
// });

// fs.rename(filePath,`${dirPath}/apple.txt`,(err)=>{
//     console.log("!!New File name is assigned!!");     //Renaming the filename 
// })

fs.unlinkSync(`${dirPath}/orange.txt`);            //Deleting  the file in the crud folder