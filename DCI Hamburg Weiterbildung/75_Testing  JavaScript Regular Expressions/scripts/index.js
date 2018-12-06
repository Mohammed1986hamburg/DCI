// let dataComesFromUser1='mohafgfmmed wahbe';
// let dataComesFromUser2='mohammed';

// let myRegex1=/^mohammed\s(wahba|Wahbe)$/i;
// let myRegex2=/^mohammed\s?(wahba|Wahbe)?$/i;
// let myRegex3=/^m(o|u)hamm?(a|e)d$/i; // for mohammed  , mohamad , muhammad
// let myRegex4=/^[a-zßüäö\s]+$/i; // for any firstName middName lastName


// console.log(myRegex1.test(dataComesFromUser1));
// console.log(myRegex2.test(dataComesFromUser2));

// console.log(myRegex4.test(dataComesFromUser1));


// // numbers

// let numbers1='684-8547-654', numbers2='5482154257', numbers3='5555-8888-525';
// let internationalPhoneNumber=/^[0-9]{3}\-?[0-9]{4}\-?[0-9]{3}$/i;      //[0-9]=\d

// console.log(internationalPhoneNumber.test(numbers1));
// console.log(internationalPhoneNumber.test(numbers2));

// console.log(internationalPhoneNumber.test(numbers3));

// // password

// let password1='684hh854654', password2='gggh@55522', password3='gggh@55522';
// let checkPass=/^[\w]{5,20}$/i;      //[a-z0-9]=\w
// let checkPassPlusSympols=/^[\w\W]{5,20}$/i;

// console.log(checkPass.test(password1));
// console.log(checkPass.test(password2));

// console.log(checkPassPlusSympols.test(password3));


// // ex german cellphone number
// let germanNumbers1='0 16008121425', germanNumbers2='004916008121425', germanNumbers3='0049 1 6 0 0 8121 42 5';
// let germanPhoneNumber=/^(0|0049)\s?(\d\s?){11}$/i;   

// console.log(germanPhoneNumber.test(germanNumbers1));
// console.log(germanPhoneNumber.test(germanNumbers2));
// console.log(germanPhoneNumber.test(germanNumbers3));

// // ex german cellphone number
// let email1='best.pid@gmail.com', email2='best.pid@gmail.net', email3='best&pid@gmail.biz';
// let emailTest=/^[\w#$%\.]{2,50}@[a-z]{2,50}\.(com|org|net)$/i;   

// console.log(emailTest.test(email1));
// console.log(emailTest.test(email2));
// console.log(emailTest.test(email3));

// // ex website
// let website1='https://www.google.com',website2='http://www.googl1e.oro', website3='https://www.google.r';
// let websiteTest=/^https?:\/\/www\.[\w\-]{2,50}\.[a-z]{2,4}$/i; 

// console.log(websiteTest.test(website1));
// console.log(websiteTest.test(website2));
// console.log(websiteTest.test(website3));

// // ex who love to bear or bears
// let lovesBears1='I am bear, i love watvhing bears fishing',lovesBears2='i love watvhing bears fishing', lovesBears3='my morning is beard';
// let lovesBearsTest=/\bbears?\b/ig; 

// console.log(lovesBearsTest.test(lovesBears1));
// console.log(lovesBearsTest.test(lovesBears2));
// console.log(lovesBearsTest.test(lovesBears3));


// console.log(lovesBears1.match());

// facebooks vs Twitter

let textarea=document.querySelector("#textarea"),papragraphFacebook=document.querySelector("#fb"),papragraphTwitter=document.querySelector("#tw");

textarea.addEventListener("keyup", function (ev) {
    try {
    let textValue=textarea.value;
    let facebookTest=/\bf(ace)?b(ook)?\b/ig;  
    let twitterTest=/\btw(itter)?\b/ig;
    let facebookArray=[],twitterArray=[];
    // console.log(facebookArray.length);
    // console.log(witterArray.length);

    facebookArray=textValue.match(facebookTest);
    twitterArray=textValue.match(twitterTest);
    papragraphFacebook.innerHTML=`you are typing ${facebookArray.length} times of Facebook`;
    papragraphTwitter.innerHTML=`you are tuping ${twitterArray.length} times of Twitter`;
        }
    catch(error){ 
       
    }
    
})