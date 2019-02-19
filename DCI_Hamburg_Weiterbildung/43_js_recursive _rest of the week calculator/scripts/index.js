var hoursRemaining = 0;

function calculateUntilEndOfWeek(numDay) {

  const moneyPerHour = 10;

  switch(numDay) {
    case 1:
      hoursRemaining += 4;
      break;
    case 2:
      hoursRemaining += 6;
      break;
    case 3:
      hoursRemaining += 8;
      break;
    case 4:
      hoursRemaining += 10;
    case 6:
      hoursRemaining += 2;
      break;
    default:
      hoursRemaining += 0;
  }

  numDay++;

  if (numDay <= 7) {
    calculateUntilEndOfWeek(numDay);
  } else {
    console.log(`The money that you are going to earn until the end of the week is ${hoursRemaining * moneyPerHour}$`);
  }

}

calculateUntilEndOfWeek(5);






// Write a function that calculates how much money i am going to earn until the end of the week by just accepting a number from 1 to 7 that represents the days of the week. (1 is for Monday, 2 for Tuesday, etc 7 is for Sunday).

// Given i earn 10$ per hour and my working schedule is this:

// Monday: I work 4 hours

// Tuesday: I work 6 hours

// Wednesday: I work 8 hours

// Thursday: I work 10 hours 

// Saturday: I work 2 hours

// Fridays and Sundays i can have my days-off.

 

// Rules: Write this in a re-usable way and without using a loop (recursive style maybe!).

// Estimated time: 30 mins.
