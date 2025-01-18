import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
// Imports go first


// Make 5 pieces of pottery at the wheel
let mug = makePottery('mug', 7, 8)
mug = firePottery(mug, 2200)
console.table(mug)

let pot = makePottery('pot', 7, 3)
pot = firePottery(pot, 4000)
console.table(pot)

let brick = makePottery('brick', 10, 10)
brick = firePottery(brick, 2200)
console.table(brick)

let bust = makePottery('bust', 10, 10)
bust = firePottery(bust, 3000)
console.table(bust)

let statue = makePottery('statue', 100, 100)
statue = firePottery(statue, 2200)
console.table(statue)

// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



 

/*
In the `main.js` module, invoke the `makePottery` function and provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the object.

Once you have it working, make 5 pieces of pottery in `main.js`.

**THEN PUSH YOUR CODE TO GITHUB**

-----

In the `main.js` module, invoke the `firePottery` function for each of the 5 pieces of pottery you created. Ensure you provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the objects and make sure it has the right properties on each.

To check your work, make sure that at least one of your pieces of pottery is fired at a temperature that is too high.

**THEN PUSH YOUR CODE TO GITHUB**

--

In the `main.js` module, invoke the `toSellOrNotToSell` function for each of the 5 pieces of pottery you created. Ensure you provide the required value as an argument.

**THEN PUSH YOUR CODE TO GITHUB**

--

In the `main.js` module, invoke the `PotteryList` component function. Take its return value and update the inner HTML of the article element you created above. When you start your web server, you should see your non-cracked pottery list appear (_example below_).

![example output](./src/images/pottery.png)

**THEN PUSH YOUR CODE TO GITHUB**
*/