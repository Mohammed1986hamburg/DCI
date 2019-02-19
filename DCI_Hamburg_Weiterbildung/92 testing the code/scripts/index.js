// Implementation code
const addition = (a, b) => {

    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'Sorry, the operation is not possible!';
    } else if (a < 0) {
      return Math.abs(a) * b;
    }
  
    return a + b;
  }
  
  
  // Testing code
  const checkAddition = function() {
    const expectedResult = 25;
    const actualResult = addition(2, 23);
  
    if (expectedResult == actualResult) {
      console.log('Your test passed!');
    } else {
      console.log('Your test has failed! This is the checkAdditon function!');
    }
  }();
  
  const additionGoneWrong = (() => {
    const expectedResult = 'Sorry, the operation is not possible!';
    const actualResult = addition(false, '23');
  
    if (expectedResult == actualResult) {
      console.log('Your test passed!');
    } else {
      console.log('Your test has failed! This is the additionGoneWrong function');
    }
  })();
  
  const returnPositiveProduct = (() => {
    const expectedResult = 40;
    const actualResult = addition(-4, 10);
  
    if (expectedResult == actualResult) {
      console.log('Your test passed!');
    }else {
      console.log('Your test has failed! This is the returnPositiveProduct function');
    }
  })();