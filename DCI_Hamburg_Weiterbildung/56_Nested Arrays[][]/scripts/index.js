
let amount=[5,5,2,6,1];
let groceries=['chocolate','bananas','rice','beers','deodorant'];
let shoppingCart=[];

for (let i = 0; i < amount.length; i++) {
    shoppingCart.push([amount[i],groceries[i]]);

    console.log(`Please buy ${shoppingCart[i][0]}x ${shoppingCart[i][1]}`);
}
 //or to print

 for (const item of shoppingCart) {
    console.log(`or Please buy ${item[0]}x ${item[1]}`);
 }






// Your wife / your husband has left urgently for work this morning and has left you the list for the grocery items that you should pick from the supermarket for the week. Because he/she was in a rush meshed it up and you ended up with 2 lists. 

// The first list contains the names of the groceries.

// And the second one the amount of every corresponding items you should buy.

// The groceries list is comprised of 5 items. chocolate, bananas, rice, beers, deodorant.

// The amount for each is: 5, 5, 2, 6, 1.

// Store these lists in 2 different arrays.

// Then find a way to create a pair for every index (ex. ['chocolate', 5] and store this into an empty array.

// The final result should be: [['chocolate', 5], ['bananas', 5], ['rice', 2], ['beers', 6], ['deodorant', 1]].

// In the end find a way to print 5 times a message to the console that says:

// Please buy 5x chocolate.

// Please buy 5x bananas.

// Please buy 2x rice.

// Please buy 6x beers.

// Please buy 1x dedorant.