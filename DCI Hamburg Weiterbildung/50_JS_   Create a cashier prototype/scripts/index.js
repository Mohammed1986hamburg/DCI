let shop = {
    tshirtPrice: 10,
    jeansPrice: 30,
    jacketPrice: 150,
    tshirtStock: 100,
    jeansStock: 100,
    jacketStock: 100,
    balance: 0,
    createSale: function(numOfShirts, numOfJeans, numOfJackets) {
      let enoughShirts = numOfShirts <= shop.tshirtStock;
      let enoughJeans = numOfJeans <= shop.jeansStock;
      let enoughJackets = numOfJackets <= shop.jacketStock;
  
      if (!enoughShirts) {
        numOfShirts = shop.tshirtStock;
      }
  
      if (!enoughJeans) {
        numOfJeans = shop.jeansStock;
      }
  
      if (!enoughJackets) {
        numOfJackets = shop.jacketStock;
      }
  
  
      let costOrder = numOfShirts * shop.tshirtPrice + numOfJeans * shop.jeansPrice + numOfJackets * shop.jacketPrice;
      if(!costOrder){console.log('Nothing in the Stock'); return;}
      this.numOfSales += 1;
      this.cashierBalance += costOrder;
      shop.balance += costOrder;
      shop.tshirtStock -= numOfShirts;
      shop.jeansStock -= numOfJeans;
      shop.jacketStock -= numOfJackets;
      console.log(`The cashier with id ${this.id} and more specifically ${this.employee} has made a new sale! The balance of this cashier now is ${this.cashierBalance} $.`);
      console.log(`After this sale the total balance of the shop is ${shop.balance}$`);
    },
    refund: function(numOfShirts, numOfJeans, numOfJackets) {
      let costOrder = numOfShirts * shop.tshirtPrice + numOfJeans * shop.jeansPrice + numOfJackets * shop.jacketPrice;
      this.numOfSales -= 1;
      this.cashierBalance -= costOrder;
      shop.balance -= costOrder;
      shop.tshirtStock += numOfShirts;
      shop.jeansStock += numOfJeans;
      shop.jacketStock += numOfJackets;
      console.log(`Refund on cashier with id ${this.id} was success!`);
    }
  };
  
  let Cashier = function(id, employee) {
    this.id = id;
    this.employee = employee;
    this.numOfSales = 0;
    this.cashierBalance = 0;
  }
  
  let firstCashier = new Cashier(1, 'Marcelo Ramirez');
  let secondCashier = new Cashier(2, 'Meir Overferst');
  let thirdCashier = new Cashier(3, 'Jens Soltwedel');
  
  Object.setPrototypeOf(firstCashier, shop);
  Object.setPrototypeOf(secondCashier, shop);
  Object.setPrototypeOf(thirdCashier, shop);
  
  firstCashier.createSale(2, 2, 0);
  thirdCashier.createSale(0, 1, 1);
  thirdCashier.createSale(3, 0, 0);
  secondCashier.createSale(2, 1, 1);
  secondCashier.refund(2, 1, 1);








//    Create a cashier prototype

//    Suppose you are a manager in a shop that sells clothes (like Karstadt or H&M etc). 
   
//    The day begins, and the total balance is empty. 
   
//    Your shop sell 3 kinds of goods.
   
//       t-shirts for 10$ each.
   
//       jeans for 30$ each.
   
//       jackets for 150$ each.
   
   
//    The shop has in stock 100 t-shirts, 100 jeans and 100 jackets.
   
//    The shop has 3 different cashiers so we can serve 3 clients maximum at the same time.
   
//    Create an object for every cashier and save inside:
   
//       the id of the cashier (from 1 to 3)
   
//       the fullname of the employee that works in the cashier now.
   
//       the number of customers this cashier has served. That is different for every cashier.
   
//       the balance of every cashier at any moment (begins empty).
   
    
   
//    Create a function that deals with any new buy from a customer the following way:
   
//       Accepts what the customer has bought and how much of it does he want.
   
//          If the quantity of the specified good the customer wants to buy is ok and does not surpass 
   
//    the limit of our stock for this material then we calculate the fee the customer needs to pay and we update
   
//    first the cashier's balance and the total balance of the shop as well. In the end we increase the cashier's number of customers that have been served by 1.  
   
//          else if some material is not enough because we havn't so many pieces left, then cancel the order by consoling log a descriptive message to the console. In this case of course we don't update any other value.
   
    
   
//    Additionally create another function that is for refunding in case the customer is not happy with the material he bought and he wants to give it back and take his money back. In such a case it should be clear what he returns back, so we can update the stock and how much of this material is left, and of course update the cashier's balance and the shop's balance in general (the whole calculation result should be deducted from both balances). Don't forget to decrease the number of customers that have been serve by 1 in this case.
   
    
   
//    Be careful! Some of the properties that are getting changed are shared through all cashiers (like the total shop balance, or how much of a specific material is left) when others are different for every cashier separately.
   
//    You may want to think this first before you start implementing your architecture. 
   
    