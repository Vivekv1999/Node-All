const fs=require("fs")
const path=require("path")
const dirpath=path.join(__dirname,"13_v")   // for grting file psth


//mak multipal file
for(i=0;i<5;i++){
    fs.writeFileSync(dirpath+"num"+i+".txt","atest files")
}
                //---  node .\index.js 


//read files from teminal
// fs.readdir(dirpath,(err,files)=>{
//     console.warn(files);
// })                  
 ///--aa run krav mate index.js ni file bahar hovi joyi