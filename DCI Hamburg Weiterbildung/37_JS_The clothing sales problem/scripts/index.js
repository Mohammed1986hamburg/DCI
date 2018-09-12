
var cashier=150;
var customers=78;
for (var customerId = 1; customerId <= customers; customerId++) {
    if (customerId%3===0){
        cashier+=150;
    }else if (customerId%3===2||customerId===2){
        cashier+=60;
    }else{
        cashier+=30; 
    }
    console.log(`your Current_cashier at the Custmer ID ${customerId} is ${cashier}`);
}
console.log(`your day_cashier is ${cashier}`);

// Imagine that you work at sales department in a clothing-shop and you are responsible for selling 3 products:

// A t-shirt that costs 10$

// A Jeans that costs 30$

// and a Jacket that costs 150$

// You have noticed a paradox pattern. Every three people the new customers buy the same things.

// For example the first customer buys a 3 t-shirts.

// The second customer buys a 2 Jeans.

// The third customer buys a jacket.

// And then again the same from the beginning.

// The fourth customer again 3 t-shirts.

// The fifth customer buys again 2 jeans.

// The sixth customer buys again one jacket.

// That continues until the end of the day.

// Find out how much money your cashier has if the initial cashier was already at 150$ and the total number of customers at the end of the day was 78.