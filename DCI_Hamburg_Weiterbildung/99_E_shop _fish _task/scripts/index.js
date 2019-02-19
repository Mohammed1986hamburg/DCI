const fishInfo = [
    {species: 'tuna', price: 10},
    {species: 'salmon', price: 50},
    {species: 'koi', price: 100}
  ];
  const basket = [];
  const myFishMarket = [];
  
  // populate the myFishMarket
  
  const fillWithFishes = (numOfFishes, collectionMarket) => {
    for(let i = 1; i <= numOfFishes; i++) {
      const randomIndex = Math.floor(Math.random() * fishInfo.length); // This returns either 0, 1 or 2
      collectionMarket.push(fishInfo[randomIndex].species);
    }
  }
  
  fillWithFishes(100, myFishMarket);
  
  console.log(myFishMarket);
  
  const addFishToOrder = type => {
    if (!myFishMarket.includes(type)) {
      console.log(`Sorry but the ${type} you requested is out of order!`);
      return false;
    } else {
      const selectedFishBasket = basket.find(fish => fish.species === type);
      if (selectedFishBasket) {
        selectedFishBasket.quantity++;
      } else {
        const findSpecificTypeInfo = fishInfo.find(fish => fish.species === type);
        basket.push({species: type, price: findSpecificTypeInfo.price, quantity: 1});
      }
  
      myFishMarket.splice(type, 1);
    }
  }
  
  addFishToOrder('salmon');
  addFishToOrder('salmon');
  addFishToOrder('koi');
  addFishToOrder('tuna');
  addFishToOrder('koi');
  addFishToOrder('salmon');
  addFishToOrder('salmon');
  
  console.log(myFishMarket.length);
  console.log(basket);
  
  const calcualateBasketCosts = basket => {
    return basket.reduce((cost, eachFish) => cost + eachFish.price * eachFish.quantity, 0);
  }
  
  console.log(calcualateBasketCosts(basket));