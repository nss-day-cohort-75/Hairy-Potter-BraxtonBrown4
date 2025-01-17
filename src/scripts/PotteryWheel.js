
const potIdList = [0]
export const makePottery = (shape, weight, height) =>{

   const pottery = {
      shape: shape,
      weight: weight,
      height: height,
      id: potIdList.length,
   }

   potIdList.push(pottery)
   return pottery
}




/*
1. Define and export a function named `makePottery`.
1. The `makePottery` function must accept the following values as input _(i.e. it needs parameters)_, in the following order.
   1. Shape of the piece of pottery (e.g. "Mug", "Platter")
   1. Weight of the piece (e.g. 1, 5)
   1. Height of the piece (e.g. 3, 7)
1. The `makePottery` function must return an object with the following properties on it.
   1. `shape`
   1. `weight`
   1. `height`
   1. `id` _(increment this value each time the function is invoked)_
*/

