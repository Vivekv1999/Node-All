///filee11 no data  file22 ma transfter karavno 6 chunk thi(thodo thodo karine)

const fs=require("node:fs");

const readblestream=fs.createReadStream("./file11.txt",{
    encoding:"utf-8",
    highWaterMark:2,    //now data gone in 2-2 2bites
                        // we ca sent 64 butes data on sme time
                        //highWaterMark use SHOWN when we have big file is gb ,,,,,
})

const writeablestream=fs.createWriteStream("./file2.txt")

// now use emitter ===on==  method to write data
readblestream.on("data",(chunk)=>{
    console.log(chunk);
    writeablestream.write(chunk)
})


//////4--tyoe of stres
// 1,ReadableStream  --data can be read
// 2,writeablestream ---data can be write
// 3,duplex Stream ---data can be write and write both    //-->ex-- sockets
// 4,transform streams -->modify or transform the data as it is written and read //--?>file compressing and decompressing