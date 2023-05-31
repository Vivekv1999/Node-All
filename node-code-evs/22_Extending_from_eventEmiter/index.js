  const PizzaShop=require('./pizzaShop')
  const DrinkMachine=require('./Dring_machine')

const pizzaShop=new PizzaShop()
const drinkMachine=new DrinkMachine()

pizzaShop.on("order",(size,topping)=>{
console.log(`order received! baking a${size} pizza with ${topping}`);
drinkMachine.serveDrink(size)
})

pizzaShop.order("large","seed")
pizzaShop.displayOrderNumber()