const EventEmitter=require("events")   //-->no package --inbuit

const emitter=new EventEmitter()

emitter.on("OrderPizza",(size,topping)=>{
    console.log("order pizza : ",size,topping);
})

console.log("this run before event above beacuse->it start when it get --OrderPizza-- event");
emitter.emit("OrderPizza","Large","mashrooms")