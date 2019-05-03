let spruch = `just because the a crocodeile alte your enemy it does not he become your friend`;

let findlongestword = function() {

let sprucharray = spruch.split(' ');

    let biggestword =sprucharray[0];

    for(word of sprucharray)  {
        if  (word.length >biggestword.length)  {
        biggestword = word;

        }

    }

    console.log(`the longest word is ${biggestword} from ${sprucharray.length} sentence that contain ${biggestword.length} letters`);

}

findlongestword(spruch);

// Find the biggest word in a sentence

// Create a big sentence and save this string into a variable. 

// Try to find out how you are going to print out the biggest word in this string.

// step1 hint: Maybe you would like to split the string into seperable pieces.

// step2 hint: When you do this maybe you want to loop through each word and compare length with the next one.

let name1='mohammed';
let name2='Naan';


let isPalindrome=function (x) {
    x=x.toLowerCase();
    let y=x.split('').reverse().join('');
    let sms;
    x===y?sms='is':sms="is not";
    console.log(`${x} ${sms} Palindrome because the its reverse is ${y}`); 
}

isPalindrome(name1);
isPalindrome(name2);


// Find Palindrome

// Write a function that accepts a name and returns a message if this name is  a palindrome or not.

// You may want to some of the strings and arrays methods you learned in order to use this.

let name3='mohammed';
let name4='ohammedM';


let anagrams=function (x,y) {
    x=x.toLowerCase();
    y=y.toLowerCase();
    x=x.split('').sort().join('');
    y=y.split('').sort().join('');
    let sms;
    x===y?sms='is':sms="is not";
    console.log(`it ${sms} anagrams `); 
}

anagrams(name3,name4);






// Find Anagram

// Write a function that accepts two words and checks if they are anagrams. In other words check if they contain the same letters exactly regardless of order.

// You may find helpful the .sort() method of an array to complete this task faster.