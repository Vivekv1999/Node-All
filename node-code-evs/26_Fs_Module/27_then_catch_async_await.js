const fs=require('node:fs/promises');    ///***chceck this is chenche then other */


// fs.readFile('./file.txt',"utf-8")
// .then((data)=>console.log(data))
// .catch((error)=>console.log(error))

// ====async await form========
async function readingfile(){
    try{
        const data=await fs.readFile("./file.txt","utf-8") 
        console.log(data);

    }catch(error){
        console.log(error);
    }
}

readingfile()