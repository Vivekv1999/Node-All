const fs=require("fs")
const path=require("path")
const dirpath=path.join(__dirname,"crude")
const filepath=`${dirpath}/apple.txt`

// fs.writeFileSync(`${dirpath}/apple.txt`,"this file make in ceude folder") //--usauly we do this

//when read file comment this
// fs.writeFileSync(filepath,"this file make in ceude folder")


//for redaing file //----> buffer
// fs.readFile(filepath,"utf8",(err,item)=>{
//     console.log(item);
// })


//append text inthis file
// fs.appendFile(filepath,"extra text append",(err)=>{
//     if(!err) console.log("sucessfully appended");
// })

//--->rename file-----above file deleted(rename j thay jse) ********
// fs.rename(filepath,`${dirpath}/Fruite.txt`,(err)=>{
//         if(!err) console.log("sucessfully rename");
// })


///---delete file
fs.unlinkSync(`${dirpath}/apple.txt`)