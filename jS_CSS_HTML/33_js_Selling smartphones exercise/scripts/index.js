var basicPrice = 300;
var priceHeadphone = 50;
var priceCover = 20;
var isSmartphone = prompt('Smartphone ? yes: 1  No: 0');
var isHeadphone = prompt('Headphone ? yes: 1  No: 0');
var isCover = prompt('Cover ? yes: 1  No: 0');
var color = prompt('color ? yes: green,pink,orange  No: 0');
var discout;
var cashier = 0;


 
        if (isSmartphone == '1' && isHeadphone == '0' && isCover == '0') {
            cashier = basicPrice;
            discout = 1;
        }
        else if (isSmartphone == '1' && isHeadphone == '1' && isCover == '1') {
            discout = 0.85;
            cashier = (basicPrice+priceHeadphone+priceCover)*discout;
        }
        else if (isSmartphone == '1' && isHeadphone == '1' && isCover == '0') {
            discout = 0.9;
            cashier = (basicPrice+priceHeadphone)*discout;
        }
        else if (isSmartphone == '1' && isHeadphone == '0' && isCover == '1') {
            switch (color) {
                case 'green':
                    discout = 0.93;
                    cashier = (basicPrice+priceCover)*discout;
                    break;
                case 'pink':
                    discout = 0.88;
                    cashier = (basicPrice+priceCover)*discout;
                    break;
                case 'orange':
                     discout = 0.85;
                    cashier = (basicPrice+priceCover)*discout;
                    break;
                default:
                discout = 0.95;
                cashier = (basicPrice+priceCover)*discout;
            }
        }
        else {
            discout = 1;
            cashier = 0;
        }
    

console.log(`Total price: ${cashier}$ , and you got discount %${(1-discout)*100}`);




/*
Suppose you sell smartphones to customer.

Write a program with multiple conditions as before in order to sell a smartphone to a customer who is interested.

Set a specific price for the customer, ex 300$ and set the total sales for your cashier to 0. Also the customer should know that you sell some accessories with the smartphone. Headphones price is 50$, and cover for the smartphone 20$ each.

If the customer is not interested on buying then your cashier remains 0. 

If he interests on buying only the smartphone then add the price of the smartphone to your cashier.

If the customer also wants to buy headphones, he gets 10% discount of the total price (headphones and smartphone together). Update your cashier (total sales) accordingly.

In case the customer wants headphones and cover the discount is 15%. 

If the customer wants only a cover, discount is 5% unless he chooses one of these 3 colors: green (7% discount), pink (12% discount) or orange (15% discount). Update your cashier accordingly then.

 

Print your cashier so your boss knows exactly how much did you manage to sell to this customer by interpolating a string to console.

p.s. Before you begin create a map on paper to help you organize and articulate your thoughts.
*/
