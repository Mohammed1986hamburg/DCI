const calculateNumbers = (a, b) => {
    // If a or b is not a number then return an error message
    if (typeof a !== 'number' || typeof b !== 'number') {
      return 'The operation is not possible. Both arguments must be numbers!';
    }
  
    if (b < 0) {
      // if b is a negative number then return the product of two nums
      return a * b;
    }
    // Return the sum of two numbers
    return a + b;
  }
  
  const factorial = (x) => {
    if (typeof x !== 'number') return 'The input you entered is not a number! You get no factorial!';
    else if(x < 0) return 'Impossible to present factorial of a negative number';
    else if (x == 0) return 1;
    else return x*factorial(x-1);
}
  
let Zodiac = function(sign, beginDate, endDate) {
  this.sign = sign;
  this.beginDate = beginDate;
  this.endDate = endDate;
}

let aries = new Zodiac('Aries', new Date(2020, 2, 21), new Date(2020, 3, 19));
let taurus = new Zodiac('Taurus', new Date(2020, 3, 20), new Date(2020, 4, 20));
let gemini = new Zodiac('Gemini', new Date(2020, 4, 21), new Date(2020, 5, 20));
let cancer = new Zodiac('Cancer', new Date(2020, 5, 21), new Date(2020, 6, 22));
let leo = new Zodiac('Leo', new Date(2020, 6, 23), new Date(2020, 7, 22));
let virgo = new Zodiac('Virgo', new Date(2020, 7, 23), new Date(2020, 8, 22));
let libra = new Zodiac('Libra', new Date(2020, 8, 23), new Date(2020, 9, 22));
let scorpio = new Zodiac('Scorpio', new Date(2020, 9, 23), new Date(2020, 10, 21));
let sagittarius = new Zodiac('Sagittarius', new Date(2020, 10, 22), new Date(2020, 11, 21));
let capricorn = new Zodiac('Capricorn', new Date(2020, 11, 22), new Date(2021, 0, 19));
let aquarius = new Zodiac('Aquarius', new Date(2020, 0, 20), new Date(2020, 1, 19));
let pisces = new Zodiac('Pisces', new Date(2020, 1, 20), new Date(2020, 2, 20));

const allZodiacs = [aries, taurus, gemini, cancer, leo, virgo, libra, scorpio, sagittarius, capricorn, aquarius, pisces];

const showZodiac = birthday => {
  birthday.getMonth() === 0 && birthday.getDate<20 ? birthday.setYear(2021) : birthday.setYear(2020);
  for (let zodiac of allZodiacs) {
    if (birthday >= zodiac.beginDate && birthday <= zodiac.endDate) {
      return `Your zodiac is ${zodiac.sign}`;
    }
  }
}
  module.exports = {CalculateNumbers:calculateNumbers, Factorial:factorial, showZodiac:showZodiac} ;