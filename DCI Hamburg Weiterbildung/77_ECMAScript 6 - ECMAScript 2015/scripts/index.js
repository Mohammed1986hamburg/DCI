let root = a => a ** (1 / 2);
console.log(root(9));


let AmultiB = (a, b) => { let answer; a % b == 0 ? answer = true : answer = false; return answer; }
console.log(AmultiB(9, 3));
console.log(AmultiB(9, 4));


let button = document.querySelector('button');
button.addEventListener("click", ev => {
   console.log(ev.type);
})


let telephoneData = [
   { countryCode: '0030', country: 'Greece' },
   { countryCode: '0039', country: 'Italy' },
   { countryCode: '00972', country: 'Israel' },
   { countryCode: '0007', country: 'Russia' },
   { countryCode: '0044', country: 'United Kingdom' },
   { countryCode: '0001', country: 'United States' },
   { countryCode: '00963', country: 'Syria' },
   { countryCode: '0029', country: 'Belgium' },
   { countryCode: '0031', country: 'Holland' },
   { countryCode: '0049', country: 'Germany' },
]

let findCountryByCodef = (code, arr) => arr.find(object => object.countryCode == code).country;
console.log(findCountryByCodef('0044', telephoneData));
console.log(findCountryByCodef('0031', telephoneData));
console.log(findCountryByCodef('0049', telephoneData));
// arry.reduce
let arr1=[2,4,6,8];
let arrSum= arr => arr.reduce((total, num)=> total+num,0);
console.log(arrSum(arr1));

//Find cheap airline tickets
// Given that you have this data that shows 10 airline companies and their corresponding average ticket prices.
// Try to create a single arrow function that accepts a collection of data (in this case this array) and returns only the names of every airline company whose average ticket costs less than 100 Euro.

// Bonus: Try to use no if-statements etc. Make this as compact as possible.
let airlinePrices = [
   {airlinesName: 'Lufthansa', avgPriceTicket: 85.6},
   {airlinesName: 'Aegean', avgPriceTicket: 65.8},
   {airlinesName: 'KLM', avgPriceTicket: 102.82},
   {airlinesName: 'British Airways', avgPriceTicket: 114.9},
   {airlinesName: 'Iberia', avgPriceTicket: 77.2},
   {airlinesName: 'TAP Portugal', avgPriceTicket: 58.9},
   {airlinesName: 'Alitalia', avgPriceTicket: 84.2},
   {airlinesName: 'Air France', avgPriceTicket: 105.6},
   {airlinesName: 'Singapore Airlines', avgPriceTicket: 119.2},
   {airlinesName: 'Emirates', avgPriceTicket: 135.4},
 ]

 let findAirlinesByAv1 = (averge, arr) => arr
 .filter(object => object.avgPriceTicket <= averge)
 .forEach(company => console.log(company.airlinesName));

 let findAirlinesByAv2 = (averge, arr) =>arr.filter(object => object.avgPriceTicket <= averge).reduce((total,obc) => total+obc.airlinesName + ", ","");
findAirlinesByAv1(100, airlinePrices);
console.log(findAirlinesByAv2(100, airlinePrices));

// Find Unique Names
// Given that you have the following data that is comprised from many names.
let names = [
   'Mauro',
   'Eugen',
   'Mauro',
   'Meir',
   'Eugen',
   'Jens',
   'Jens',
   'Jake',
   'Mohammed',
   'Mauro',
   'Mohammed',
   'Marcelo',
   'Sue',
   'Murhaf',
   'Jens'
 ];

//  let noDuplicates= arr => {let newArr=[];
//     for(name of arr)
//       {
//        if(!newArr.includes(name))newArr.push(name);
//       } 
//        return newArr; 
//    }
//  console.log(noDuplicates(names));

let uniqueNames= new Set(names);
console.log(uniqueNames);

 // Duplicates
let numbers=[0,2,4,6,8];
 let Duplicates= arr => arr.map(item => item*10);
      
      
console.log(Duplicates(numbers));
console.log(Duplicates(Duplicates(numbers)));

//