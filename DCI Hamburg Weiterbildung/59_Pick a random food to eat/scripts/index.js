let possibleFoods = ['bananas', 'rice', 'chocolate', 'pizza', 'mett', 'bread', 'onions'];
let daysList=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sundy'];

let dayToFood = function(food,days) {

for(let day of days) {
let randomIndexFood = Math.floor(Math.random()*food.length);
console.log(`${day} Will have ${food[randomIndexFood]}`);
food.splice(randomIndexFood,1);
 }   

}

dayToFood(possibleFoods,daysList);



// Pick a random food to eat

// Are you hungry but you don't know what to eat for today?

// Create an array with 7 different favorite foods of yours.

// ex. favFoods = ['bananas', 'rice', 'chocolate', 'pizza', 'mett', 'bread', 'onions'];

// Create a function that picks randomly one of this seven foods and prints it to the console.

// Bonus: Create a function that actually selects randomly one of these for every day of the week and  prints ('On Monday i will have bananas'). 

// hint; You may want to create another array to hold there, the days of the week. Also when a food is selected it cannot be reselected, that means you need to remove it from the array. Maybe the splice method that any array provides will help in this case.

// arr.splice(which index to start removing, how many elements)