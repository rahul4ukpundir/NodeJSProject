// require - it is used to import any module.
const fs = require("fs");



 //create a file and write data inside file
fs.writeFile("personel-detail.txt", JSON.stringify({name: "Rahul", email: "rahul.pundir@concentrix.com"}), (error)=>{
    if(error){
        console.log("error occured!");
        return;
    }
    else{
        console.log("wrote the data");
    }
})

//console.log("Hello World!")



