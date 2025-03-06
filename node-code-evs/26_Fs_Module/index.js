//////runtime----node index
//////runtime----node index


const fs=require("node:fs");

console.log("aa--for check ascyncnition");

//reading file syncronusly
// const fileContent =fs.readFileSync("./file.txt")     //-->proviede BUffer data
const fileContent =fs.readFileSync("./file.txt","utf-8")   //==>proide human readabke data
console.log(fileContent); 

console.log("bb--for check ascyncnition");

// i ffile is to large an dperfoamnce is so poor so,,
////now if below file is large then code move futhe rand this code run in background
fs.readFile("./file.txt","utf-8",(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
    }
})

console.log("cc--for check ascyncnition");


//======222=====
////write content in file
///if file not exixst then automatic make and writ text on it
fs.writeFileSync("./greet.txt","hello world")
// fs.writeFileSync("./greet.txt","hello vishawas",(error)=>{
//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log("file written succesfully");
//     }
// })
///by defalut wrte file over-right file content

///append  in fil
// but you can append file in existing file 
fs.writeFileSync("./greet.txt"," hello vishawassss!",{flag:'a'},(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("file written succesfully");
    }
})



//""""reding the file take lot more time than wrting the filt
// so if you console every sathe fs.readFile ---content is in last