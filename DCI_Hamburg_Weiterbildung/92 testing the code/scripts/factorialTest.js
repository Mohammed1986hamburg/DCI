
import {factorial} from "../index.js"

const passedMessage = 'Your test passed';
const failedMessage = 'Your test failed';

const notANumber = (() => {
    const actualResult = factorial('clearly not a number');
    const expectedResult = 'The input you entered is not a number! You get no factorial!';
  
    expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
  })()
  
  const isNegative = (() => {
    const actualResult = factorial(-5);
    const expectedResult = 'Impossible to present factorial of a negative number';
  
    expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
  })()
  
  const isZero = (() => {
    const actualResult = factorial(0);
    const expectedResult = 1;
  
    expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
  })()
  
  
  const isPositive = (() => {
    const actualResult = factorial(4);
    const expectedResult = 24;
  
    expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
  })()