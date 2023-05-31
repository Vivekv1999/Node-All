// const buffer=new Buffer("vishwas","utf-8")   ====>utf-8 is encoing(is default utf-8) so we did not write
const buffer=new Buffer.from("Vishwas")

buffer.write("code")    //-->it overrider  vishwas firt 4 character-->codewas
                        ///it happen because of buffer has limited space
                //--->if we write
                // buffer.write("codevolution")  -->it became --> codevol  (buffer.toSting() karta dekahse)


console.log(buffer.toString());  //-->we know kaystring nu  exicution thayu 6
                                


console.log(buffer);   //---hexa desimal to binary cover kari joy levu perticualr chartevrt ==v->binarydata
console.log(buffer.toJSON());  //--direct get charatcetr data--v i s ...--- in nuber (unicode )





 
// unicode and ASCII