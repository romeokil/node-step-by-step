//This is lecture no 45.js in which we learn about os modules.
//Basically agr hmko koi os se info chahiye toh wo apn es module ke help se jaan lege.
// Jaise ram,architecture,host apne system ka dekhna hai wagera ke baare me jaanaa ho toh aaaram se jaan skte hai.
const os=require('os')
console.log(os.arch());//Ye tmhaaare system ka architecture bta raha hai.
console.log(os.freemem()/(1024*1024*1024));//free memory bta dega kitna hai.
console.log(os.totalmem()/(1024*1024*1024));//Total ram kitna hai wo bta dega.
console.log(os.hostname()); // DESKTOP-INKG059 eska answer sayd apna model wagera bta de rha hai.
console.log(os.platform());//win32 iska answer hai.
console.log(os.userInfo()); //home directory,username wagera sb kuch bta dega.
