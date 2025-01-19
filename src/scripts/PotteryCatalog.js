const sellArray = []

export const toSellOrNotToSell = (pottery) => {
    if (pottery.cracked === false) {
        if (pottery.weight >= 6) {
            pottery.price = 40
            sellArray.push(pottery)
            return pottery
        } else {
            pottery.price = 20
            sellArray.push(pottery)
            return pottery
        }
    }
}

export const usePottery = () => {
    return JSON.parse(JSON.stringify(sellArray))
}
