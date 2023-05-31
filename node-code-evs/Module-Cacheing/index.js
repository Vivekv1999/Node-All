const SuperHero=require('./SuperHero')

console.log(SuperHero.getName());     //==>BatMan
SuperHero.setName("SuperMan");
console.log(SuperHero.getName());  //===>SuperMan



//now Module caching
const newSuperHero=require('./SuperHero')
console.log(newSuperHero.getName());   ///-->At here we assume --->BatMan
                                    ///-->BUT--ans --->SuperMan




// Debug kari joy levi IIFE(inmitadily invoke function) ===>and  its 5 perameter


///===================2nd way=============
//-->not caching
// const SuperHero=require('./SuperHero')

// const BatMan=new SuperHero("BatMan")
// console.log(BatMan.getName());     //==>BatMan
// BatMan.setName("Bruce Wayne");
// console.log(BatMan.getName());  //===>Bruce Wayne
const SuperMan=new SuperHero("SuperMen")
console.log(SuperMan.getName());   ///--->superMan