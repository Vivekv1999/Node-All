//pipes ==>pipes can conect readble stream to writabl stream


//now we copy stram scode and copy here and in reablestarem.on... line comment and we just pust pipes line tre and out put is same 

///filee11 no data  file22 ma transfter karavno 6 chunk thi(thodo thodo karine)
//*****zlib --zlib--gzip---valu badhu extra 6 ********


const fs=require("node:fs");
const zlib=require("node:zlib")

const gzip=zlib.createGzip()

const readblestream=fs.createReadStream("./file11.txt",{
    encoding:"utf-8",
    // highWaterMark:2,    
})

readblestream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"))
const writeablestream=fs.createWriteStream("./file2.txt")


readblestream.pipe(writeablestream)
//====>comment this 28 lac line-=====
// readblestream.on("data",(chunk)=>{
//     console.log(chunk);
//     writeablestream.write(chunk)
// })



/////=====>pipe condition is --
///destinaton streams has to be--> readble, duplex, transformable stream