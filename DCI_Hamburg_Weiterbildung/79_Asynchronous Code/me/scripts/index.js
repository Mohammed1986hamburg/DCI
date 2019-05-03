// let name = `Jake`;

// setTimeout(function() {
//     name = `Daniel`;
//     console.log(name);
// },0)

// console.log(name);
// console.log(name);


var promise1 = new Promise(function(resolve, reject) {   // asynchronous operation
    setTimeout(function() {
      resolve('foo');
    }, 300);
  });
  
  promise1.then(function(value) {                      // asynchronous operation
    console.log(value);
    // expected output: "foo" 
  });
  
  console.log(promise1);
  // expected output: [object Promise]