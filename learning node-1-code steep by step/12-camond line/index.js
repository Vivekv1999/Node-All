const fs=require("fs")

// const input=process.argv
// fs.writeFileSync(input[2],input[3]);
//---------> node .\index.js ternimal.txt file_add_by_terminal


const input=process.argv
if(input[2]=="add"){
    fs.writeFileSync(input[3],input[4])   // node .\index.js add secondfile.txt addor_removw filee
}
else if(input[2]=="remove"){
    fs.unlinkSync(input[3])
}
else{
    console.log('enter correct word in terminal')
}


