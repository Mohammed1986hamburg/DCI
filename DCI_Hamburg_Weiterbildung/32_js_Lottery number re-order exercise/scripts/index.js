var randomNumber = 777;
var standardWinnings = 10;
var jackpot = 1000;

 
    

        if (randomNumber < 500) {
            standardWinnings = 0;
        }
        else if (randomNumber < 700  || randomNumber >= 800 && randomNumber < 900) {
            standardWinnings = standardWinnings * 2;
        }
        else if (randomNumber < 800) {
            switch (randomNumber) {
                case 777:
                    standardWinnings = jackpot;
                    break;
                case 776:
                    standardWinnings = jackpot / 2;
                    break;
                case 778:
                    standardWinnings = jackpot / 5;
                    break;
                default:
                    standardWinnings = standardWinnings * 10;
            }
        }
        else {
            standardWinnings = standardWinnings * 5;
        }
    

console.log(`Total Winnings: ${standardWinnings}`);

/*
The program accepts 3 inputs and reads them. The first is the random lottery  number from 1 to 1000 that a customer buys from you. Feel free to define this number manually. The second is the jackpot that now is 1000$. And a third input that is the standard winnings. The latter acts like a basis. The basis is 10$ but it can much more or nothing depending on the area the random number belongs to. 

In case the number is from 1 to 499 the earnings become from 10$ to 0. So if the customer gets a number withing this range, he wins nothing.

If the number the customer bought, is between 500 and 699 or between 800 and 899 then he wins the basis twice.

In case he picks a number that belongs to 700 area (700-799) he wins the basis 10 times! Especially the numbers 776, 777, 778 they produce another winning pot. 777 gives him the jackpot. 776 gives him half of the jackpot and 778 gives him the 1/5 of the jackpot.

In any other number circumstance (900 and more or so)   the customer takes the basis 5 times.

 

Reorder the exercise add the curly braces where missing, and don't forget to the console.log interpolated string at the end to show the message to the user. 
*/
