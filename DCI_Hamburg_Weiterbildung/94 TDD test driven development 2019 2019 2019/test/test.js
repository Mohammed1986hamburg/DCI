 const factory = require('../scripts/factory.js');
 const assert =require(`assert`); // assert library from node.js


 describe(`Testing whole functionality,test suite`,() =>{   
 
 
  describe(`Testing the calculateNzmbers function`,()=>{
    it(`should return the sum of arguments`,()=>{
      const actualResult=factory.CalculateNumbers(10,15);
      const expectedResult=25;
      assert.equal(actualResult,expectedResult);
    })
    it(`should return the product if b is Negativ`,()=>{
      const actualResult=factory.CalculateNumbers(10,-4);
      const expectedResult=-40;
    assert.equal(actualResult,expectedResult);
 
 
    })
  })

  describe(`Testing the showZodiac function`,()=>{
    it(`should return Your zodiac is Aries`,()=>{
      const actualResult=factory.showZodiac(new Date(2020, 2, 25));
      const expectedResult="Your zodiac is Aries";
      assert.equal(actualResult,expectedResult);
    })
    it(`should return Your zodiac is Taurus`,()=>{
      const actualResult=factory.showZodiac(new Date(2020, 3, 22));
      const expectedResult="Your zodiac is Taurus";
      assert.equal(actualResult,expectedResult);
    })
    it(`should return Your zodiac is Gemini`,()=>{
      const actualResult=factory.showZodiac(new Date(2020, 4, 25));
      const expectedResult="Your zodiac is Gemini";
      assert.equal(actualResult,expectedResult);
    })
    it(`should return Your zodiac is Cancer`,()=>{
      const actualResult=factory.showZodiac(new Date(2020, 5, 25));
      const expectedResult="Your zodiac is Cancer";
      assert.equal(actualResult,expectedResult);
    })
    it(`should return Your zodiac is Leo`,()=>{
      const actualResult=factory.showZodiac(new Date(2020, 6, 25));
      const expectedResult="Your zodiac is Leo";
      assert.equal(actualResult,expectedResult);
    })
    it(`should return Your zodiac is Virgo`,()=>{
      const actualResult=factory.showZodiac(new Date(2020, 7, 25));
      const expectedResult="Your zodiac is Virgo";
      assert.equal(actualResult,expectedResult);
    })
    it(`should return Your zodiac is Libra`,()=>{
      const actualResult=factory.showZodiac(new Date(2020, 8, 25));
      const expectedResult="Your zodiac is Libra";
      assert.equal(actualResult,expectedResult);
    })
    it(`should return Your zodiac is Scorpio`,()=>{
      const actualResult=factory.showZodiac(new Date(2020, 9, 25));
      const expectedResult="Your zodiac is Scorpio";
      assert.equal(actualResult,expectedResult);
    })
    it(`should return Your zodiac is Sagittarius`,()=>{
      const actualResult=factory.showZodiac(new Date(2020, 10, 25));
      const expectedResult="Your zodiac is Sagittarius";
      assert.equal(actualResult,expectedResult);
    })
    it(`should return Your zodiac is Capricorn`,()=>{
      const actualResult=factory.showZodiac(new Date(2020, 11, 25));
      const expectedResult="Your zodiac is Capricorn";
      assert.equal(actualResult,expectedResult);
    })
    it(`should return Your zodiac is Aquarius`,()=>{
      const actualResult=factory.showZodiac(new Date(2020, 0, 25));
      const expectedResult="Your zodiac is Aquarius";
      assert.equal(actualResult,expectedResult);
    })
    it(`should return Your zodiac is Pisces`,()=>{
      const actualResult=factory.showZodiac(new Date(2020, 1, 25));
      const expectedResult="Your zodiac is Pisces";
      assert.equal(actualResult,expectedResult);
    })
  })

  
 
 })


//  const notNumbers = (() =>{
//    console.log('Testing not numbers');
//     const actualResult = factory.CalculateNumbers("a",15);
//     const expectedResult ='The operation is not possible. Both arguments must be numbers!';
//     actualResult ===expectedResult? console.log(`test passed`): console.log(`test failed`)
//    })();

//    const isPruduct = (() =>{
//       console.log('Testing  Pruduct');
//     const actualResult = factory.CalculateNumbers(10,15);
//     const expectedResult =-50;
//     actualResult ===expectedResult? console.log(`test passed`): console.log(`test failed`)
//    })();

//    const isSum = (() =>{
//       console.log('Testing Sum');
//     const actualResult = factory.CalculateNumbers(10,15);
//     const expectedResult =25;
//     actualResult ===expectedResult? console.log(`test passed`): console.log(`test failed`)
//    })();

   
  
//      const passedMessage = 'Your test passed';
//      const failedMessage = 'Your test failed';
     
//      const notANumber = (() => {
//       console.log('Testing factorial');
//          const actualResult = factory.Factorial('clearly not a number');
//          const expectedResult = 'The input you entered is not a number! You get no factorial!';
       
//          expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
//        })();
       
//        const isNegative = (() => {
//         console.log('Testing factorial');
//          const actualResult = factory.Factorial(-5);
//          const expectedResult = 'Impossible to present factorial of a negative number';
       
//          expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
//        })();
       
//        const isZero = (() => {
//         console.log('Testing factorial');
//          const actualResult = factory.Factorial(0);
//          const expectedResult = 1;
       
//          expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
//        })();
       
       
//        const isPositive = (() => {
//         console.log('Testing factorial');
//          const actualResult = factory.Factorial(4);
//          const expectedResult = 24;
       
//          expectedResult == actualResult ? console.log(passedMessage) : console.log(failedMessage);
//        })();

