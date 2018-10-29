let possibleDigits = [`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`,`A`,`B`,`C`,`D`,`E`,`F`];

let createRandomHex = function(pool) {

let randomcolor= '#';

for(let i= 1; i <=6; i++)  {

let randomindex = Math.floor(Math.random()*pool.length);
randomcolor += pool[randomindex];



}
console.log(randomcolor);
return randomcolor;
}
document.body.style.background = createRandomHex(possibleDigits);