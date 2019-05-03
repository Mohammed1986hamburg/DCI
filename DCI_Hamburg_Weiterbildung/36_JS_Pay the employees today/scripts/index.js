
var cashier=100000;
var employeesId=1;
var nextPayment=7500;
var employees=72;

while (cashier-nextPayment>0) {
    if (employeesId===1){
        cashier-=7500;
        nextPayment=10000;
    }else if (employeesId===2){
        cashier-=10000;
        nextPayment=7500;
    }else if (employeesId<=4){
        cashier-=3000;
        employeesId===4?nextPayment=2000:nextPayment=3000;
    }else if (employeesId<=8){
        cashier-=2000;
        employeesId===8?nextPayment=1500:nextPayment=2000;
    }else if (employeesId<=12){
        cashier-=1500;
        employeesId===12?nextPayment=1000:nextPayment=1500;
    }else if (employeesId<=62){
        cashier-=1000;
        employeesId===62?nextPayment=5000:nextPayment=1000;
    }else if (employeesId<=67){
        cashier-=5000;
        employeesId===67?nextPayment=4000:nextPayment=5000;
    }else{
        cashier-=4000; 
        employeesId===72?nextPayment=0:nextPayment=4000;
    }
    employeesId++;
}
console.log(` ${employees-employeesId+1} workers have not been paid. and your cashier is ${cashier}`);

// Imagine that you are currently the big boss of a company. It is the first day of the month and you want to pay your employees. In the company now work 72 employees.

// The cashier/balance of your company now is 100.000$. You will use these to pay the salaries to your workers.

// Analytically your company is comprised of:

// 50 workers with ops and general duites: each earns 1.000$.

// 10 web developers:

//       4 of them are Frontend Developers: each earns 1.500$

//       4 of them are Backend Developers: each earns 2.000$

//       2 of them are FullStack developers: each earns 3.000$

// 5 Project managers: each earns 4.000$

// 5 DevOps Engineers: each earns 5.000$

// 2 Data Scientists:

//       1 Data Analyst: each earns $7.500

//       1 Machine Learning Engineer: each earns 10.000$

 

// Suppose you want to start paying them one by one and pay as many as you can. But there is an order. Everyone has an identifying number. The Data Scientist come first (from 1 to 2).

// Then the web devs (3 to 4, Full stack come first), (5 to 8, here come the Backend Devs), then the frontend Devs.

// Then the normal workers.

// Then DevOps Engineers

// Project Managers last.

// Print a message to console after the program to know exactly how many people have not received their payment yet, in order to raise your middle finger to these suckers. Additionally print how much money your balance has after the payment.