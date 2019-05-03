

var numBalls = prompt('How many Balls please ');
var price;

switch (numBalls) {
    case '1':
        price = 1;
        break; 
    case '3':
        price = 3;
        break;
    case '4':
        price = 4;
        break;
    case '5':
        price = 5;
        break;
    default:
        price = 2;           
}

console.log(`you have orderd ${numBalls}, will cost ${price}$`);
document.getElementById('result').innerHTML = `you have orderd ${numBalls}, will cost ${price}$` ;







