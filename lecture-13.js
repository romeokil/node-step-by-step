const fs=require('fs');
const path=require('path')   

const dirPath=path.join(__dirname,'files');  //esse tmko directory mil jaega or agr folder de diya toh folder tk ka .
console.log(dirPath);                        //directory mil jaega.

for(let i=0;i<5;i++){   //file bana rhe hai thk hai aage me directory add kr diye taaki usko pta chale ki kha file bnana hai.
    fs.writeFileSync(dirPath+`/hello${i}.txt`,"This is the simple text file which is created in the lecture no 13 using writeFileSync"); //syntax dekh lena
}
 
fs.readdir(dirPath,(err,files)=>{       //dir ko read kr rhe hai kyuki apne ko bs file show case krna hai agr files me 
                                         //kuch changing krna pdta tb files ko read krte 
    files.forEach((element) => {        //Using for each loop
        console.log(element);         //isme individually files aa rhe hai.
    });
    // console.log(files);           //esme files jo hai wo array ke form me aa rha tha.
})

