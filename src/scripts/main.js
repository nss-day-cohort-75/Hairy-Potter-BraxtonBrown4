import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { usePottery } from "./PotteryCatalog.js"
import { potteryList } from "./PotteryList.js"
import { htmlRender } from "./htmlRender.js"
// Imports go first


// Make 5 pieces of pottery at the wheel
let mug = makePottery('mug', 7, 8)
mug = firePottery(mug, 2200)
mug = toSellOrNotToSell(mug)

let pot = makePottery('pot', 3, 3)
pot = firePottery(pot, 4000)
pot = toSellOrNotToSell(pot)

let brick = makePottery('brick', 5, 10)
brick = firePottery(brick, 2200)
brick = toSellOrNotToSell(brick)

let bust = makePottery('bust', 10, 10)
bust = firePottery(bust, 3000)
bust = toSellOrNotToSell(bust)

let statue = makePottery('statue', 100, 100)
statue = firePottery(statue, 2200)
statue = toSellOrNotToSell(statue)

const html = potteryList(usePottery())

htmlRender(html, "potteryList")