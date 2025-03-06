
///microtask queue in 2 part
///-->1 exiute -->process.nextTick and then
////--->2. excicute ---> promise que
process.nextTick(() => console.log("this is process.nextTick 1"))
process.nextTick(() => {

    console.log("this is process.nextTick 22")
    process.nextTick(() => console.log("this is innner ---> process.nextTick "))
})
process.nextTick(() => console.log("this is process.nextTick 33"))

///!important ----->promise (wrong) -->Promise (coreect)
Promise.resolve().then(() => console.log("promise.resolve 11"))
Promise.resolve().then(() => {
    console.log("promise.resolve 222")
    process.nextTick(() => console.log("process.nextTick ---inner----promise"))
}
)
Promise.resolve().then(() => console.log("promise.resolve 333"))