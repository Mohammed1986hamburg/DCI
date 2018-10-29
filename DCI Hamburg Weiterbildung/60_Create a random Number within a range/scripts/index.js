// Create a random Number within a range = (Math.random*(second num - first num) +1 )+ (first num)

let createNumWithinRange = function(lowNumber, highNumber) {
    let range = Math.abs(lowNumber - highNumber)+1 ;
    let randomNumber = Math.floor(Math.random() * range + lowNumber);
    console.log(randomNumber);
  }
  
  createNumWithinRange(1, 10);
  createNumWithinRange(50, 55);
  createNumWithinRange(5, 6);