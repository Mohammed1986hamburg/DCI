var a = new Date();let start=a.getTime();
// Is it a weekend?

// Create a function that accepts a specific date given as an argument and returns a message if the day of the specific date is a weekend day or not.

let isWeekendDay=function (date) {
    if(date.getDay()==0||date.getDay()==6)  return console.log('it is weekend baby');
    else return console.log('it is not weekend baby');
}

isWeekendDay(   new Date('10/13/2018')  );
isWeekendDay(   new Date('Oct 12 2018')  );
isWeekendDay(   new Date(2018,10,11)    )  ;

// How many days remained?

// Create a function that accepts a date object as an argument and calculates how many days remain until the end of the month. The function should return a number.
let howmanyDaysremaing = function(date)  {


    let cuurentDateMonth = date.getMonth();
    let remaingdays = -1;
    
    while (cuurentDateMonth === date.getMonth())  {
    
    date.setDate(date.getDate() + 1);
    
    remaingdays++;
    
    }
    return remaingdays;
    }
    
    let currentDate = new Date();
    let februarDate = new Date(`Feb 23 2020`);
    
    console.log(howmanyDaysremaing(currentDate));
    console.log(howmanyDaysremaing(februarDate));


    // Write a function that calculates what is the last day of each month on a given year.  Pass the given year as an argument to make this the most reusable way you can

    let Month = [`jan`,`Feb`,`Marc`,`Apr`,`May`,`Jun`,`Juli`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`];
    let Days = [`sunday`,`Monday`,`Tuseday`,`Wendsday`,`Thersday`,`Friday`,`Saturday`];
    
    let lastDayofMonth = function(year)  {
    for(let i =1; i <=12; i++) {
     let lastDayofMonth = new Date(year,i,0);  // the 1 is the first day, the 0 is the last day
    console.log(`for year ${year} the last day of ${Month[i-1] }is ${Days[lastDayofMonth.getDay()]}`);
    }
    
    }
     lastDayofMonth(2018);


    //  Create the Zodiac cycle

    //  Write a function that accepts an argument as a date as a birthdate and returns the zodiac sign of the user. You may want to create an array with possible dates of every zodiac sign and filter them out.
     
      
     
    //  What is the filter array function? What is the find array function? 


let Zodiac = function(sign,beginDate,Enddate)  {
            this.sign =sign;
            this.beginDate =beginDate;
            this.Enddate =Enddate;
        
 }
       
let aries = new Zodiac(`Aries`, new Date(2020,2,21),new Date(2020,3,19));     // 2020 that means any years
let Taurus = new Zodiac(`Taurus`, new Date(2020,3,20),new Date(2020,4,20));
let Gemini = new Zodiac(`Gemini`, new Date(2020,4,21),new Date(2020,5,20));
let cancer = new Zodiac(`cancer`, new Date(2020,5,21),new Date(2020,6,22));
let Leo = new Zodiac(`Leo`, new Date(2020,6,23),new Date(2020,7,22));
let virgo = new Zodiac(`virgo`, new Date(2020,7,23),new Date(2020,8,22));
let Libra = new Zodiac(`Libra`, new Date(2020,8,23),new Date(2020,9,22));
let scorpio = new Zodiac(`scorpio`, new Date(2020,9,23),new Date(2020,10,21));
let Sagittarius = new Zodiac(`Sagittarius`, new Date(2020,10,22),new Date(2020,11,21));
let Caprocorn = new Zodiac(`Capricorn`, new Date(2020,11,22),new Date(2020,0,19));
let aqurius = new Zodiac(`aqurius`, new Date(2020,0,20),new Date(2020,1,19));
let pisces = new Zodiac(`pisces`, new Date(2020,1,20),new Date(2020,2,20));
       
       
allZodiacs = [aries,Taurus,Gemini,cancer,Leo,virgo,Libra,scorpio,Sagittarius,Caprocorn,aqurius,pisces];


 let showZodiac= function (Birthday) { // normal call back function
    Birthday.setYear(2020);     
    

    function myZodiac(dateInArray) { // high order function for array
        return (Birthday >= dateInArray.beginDate && Birthday <= dateInArray.Enddate);        
        }

        
     console.log(allZodiacs.find(myZodiac).sign);
} 

let myBirthday =new Date(1986,7,17);
showZodiac(myBirthday);













var b = new Date();let end=b.getTime();console.log(`your code took ${end-start} milliseconds `);