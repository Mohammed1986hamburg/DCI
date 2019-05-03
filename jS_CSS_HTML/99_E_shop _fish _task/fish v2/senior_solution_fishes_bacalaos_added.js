const allMyFishes = [];

const fishInformation = [
  {species: 'tuna', price: 10},
  {species: 'salmon', price: 50},
  {species: 'koi', price: 100},
  {species: 'bacalao', price: 30}
]

//populate our market

const populateMarket = numOfFishes => {

  for (let i = 1; i <= numOfFishes; i++) {
    const createRandomIndex = Math.floor(Math.random() * fishInformation.length) // Generate a random number 0, 1 or 2
    allMyFishes.push(fishInformation[createRandomIndex].species);
  }

}

populateMarket(100);

const removeFish = (type, numOfRemovedFishes) => {
  for (let i = 1; i <= numOfRemovedFishes; i++) {
    allMyFishes.splice(type, 1);
  }
}

const createFishOrder = function(numOfTuna, numOfSalmons, numOfKois, numOfBacalaos) {
  const basket = [];

  for(let i = 0; i < fishInformation.length; i++) {
    const availableTypeFish = allMyFishes.filter(fish => fish === fishInformation[i].species).length;
    const offeredTypeFish = availableTypeFish >= arguments[i] ? arguments[i] : availableTypeFish
    removeFish(fishInformation[i].species, offeredTypeFish);
    basket.push({species: fishInformation[i].species, price: fishInformation[i].price, quantity: offeredTypeFish});
  }

    return basket;
}

const calculateCost = (cart) => {
  return cart.reduce((totalOrderCost, eachFish) => totalOrderCost + eachFish.quantity * eachFish.price, 0);
}

const maurosOrder = createFishOrder(5, 0, 2);
console.log(calculateCost(maurosOrder));

console.log(maurosOrder);
