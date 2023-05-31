class SuperHero{
    constructor (name){
        this.name=name
    }

    getName(){
        return this.name=name;
    }

    setName(name){
        this.name=name
    }
}

module.export= new SuperHero("Batmen")
// module.export= SuperHero     ///--when we require this module reloading--->not caching then use this---