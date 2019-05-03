//We want the program in app.js to store the starting amount of memory used (heapUsed),
//perform an operation, and then compare the final amount of memory used to the original amount.

let initialMemory=process.memoryUsage().heapUsed;

//We want the user of the program to be able to fill in their own word when they run the program.

let word=process.argv[2]; 

console.log(`your word is ${word}`);

let wordArray=[];

for (let i = 0; i < 1000; i++) {
    wordArray.push(`${word} count; ${i}`)
}

console.log(`starting memory usage: ${initialMemory}.
 \nCurrent memory usega: ${process.memoryUsage().heapUsed}.
 \nAfter using the loop, the process is using ${process.memoryUsage().heapUsed-initialMemory} bytes of memory.`);



// another way from kostas 
const myArgArray=process.argv.slice(2);  // it will take copy from process.argv array, start from index 2. to new array myArgArray
const calculate=(salary, numOfMonth, percentDeducted)=>(percentDeducted/100)*salary*numOfMonth;
console.log(calculate(...myArgArray));