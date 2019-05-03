
let results=[78,82,45,69,23,91,55,39,82,60];


let passpercentage=function(arr,basis){
  let count=0;  
  for (let x of arr){
    if (x<basis)count++;
}
  return console.log((count/arr.length)*100 + ' %');
}

passpercentage(results,50);



// Imagine that you are a teacher and you have collected the results from a test of your 10 students in one place. The test results are number from 1 to 100.  The basis is 50. Calculate what percentage of the class has not passed the basis.

// The results are the followed: 78, 82, 45, 69, 23, 91, 55, 39, 66, 60.
























