// let counter = 0;

// let to10  =   setInterval(function(){

//     counter++;
//     console.log(counter)

//     if(counter === 10) {
//         clearInterval(to10)
//         }


// },1000)




// Create a countdown until an event

// Create a countdown timer between the current  date and a future day that holds an event at least 3 months from now. 

// The countdown should count reversely and show how many months remain between the dates , how many days, how many hours, minutes and seconds. The countdown should be updated after each second.


let countdown  =   setInterval(function(){

    let christmas = new Date(2018,11,25);
    let today = new Date();
    let differenceInMs=christmas-today;

    let yearsRemainig=differenceInMs/1000/60/60/24/365;
    let yearRounded=Math.floor(yearsRemainig);
    let calculateDays=(yearsRemainig-yearRounded)*365;
    let daysRound=Math.floor(calculateDays);
    let calculateHours=(calculateDays-daysRound)*24;
    let hourssRound=Math.floor(calculateHours);
    let calculateMin=(calculateHours-hourssRound)*60;
    let minsRound=Math.floor(calculateMin);
    let calculatsecond=(calculateMin-minsRound)*60;
    let secondsRound=Math.floor(calculatsecond);
    document.getElementById("demo").innerHTML=`${yearRounded} Years,${daysRound} Days,${hourssRound} Hours,${minsRound} Mins,${secondsRound} Seconds,`;
    console.log(`${yearRounded} Years,${daysRound} Days,${hourssRound} Hours,${minsRound} Mins,${secondsRound} Seconds,`)

},1000)