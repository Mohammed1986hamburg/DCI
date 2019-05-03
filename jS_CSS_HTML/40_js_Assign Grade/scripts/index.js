function testResult(score, name) {

    if (score < 1 || score > 100) {
      console.log('The score value must be between 1 and 100!');
      return;
    }
    var message;
  
    if (score < 50) {
      message = `Not pass!`;
    } else if (score <= 60) {
      message = 'Grade D';
    } else if (score <= 80) {
      message = 'Grade C';
    } else if (score <= 90) {
      message = 'Grade B';
    } else {
  
      switch(score) {
        case 99:
          message = 'Almost Perfect';
          break;
        case 100:
          message = 'Take a day off tomorrow!';
          break;
        default:
          message = 'A';
      }
  
    }
  
    return `${name}'s score test is ${score}. ${message}.`;
  }
  
  var jakeResult = testResult(99, 'Jake');
  
  console.log(jakeResult);






//   Assign Grade

//   Write a function that accepts a number from 1 to 100 as a result of a test you gave to your students.
  
//   If the result is lower than 50 then print Not Pass! Try again next time.
  
//   If it is between 50-60 print the grade D.
  
//   If it is between 61-80 print the grade C
  
//   If it is between 81-90 print the grade B
  
//   If it is between 91-98 print the grade A
  
//   If it is 99 print 'Almost perfect'
  
//   If it is 100 'Take a day-off tomorrow'
  
//   Put different values and call the function multiple times to check your result.  