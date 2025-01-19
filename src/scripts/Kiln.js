export const firePottery = (potteryToHeat, temp) => {
   debugger
   potteryToHeat.fired = true

   if (temp > 2200) {
      potteryToHeat.cracked = true
   } else {
      potteryToHeat.cracked = false
   }
   return potteryToHeat
}