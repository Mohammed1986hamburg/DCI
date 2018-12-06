let firstStudent = 'Meir';

let changeStudent = name => {  // 1. create a function with argument(s)
  let promisedStudent = new Promise((resolve, reject) => {  //  2. create a promise object inside that function
    if (name.length === 4) {      // 3. reject (message) 
      reject('Too short name!');
    }
    resolve(name);               // 3. resolve (value),
  });

  return promisedStudent;        // 4. return promise object to that function 
}

let printAnotherStudent = newStudent => {
  let nameLower = newStudent.toUpperCase();
  firstStudent = nameLower;
  console.log(firstStudent);
}

console.log(firstStudent);

changeStudent('Jens')
  .then(printAnotherStudent)
  .catch(nostradamus => {
    console.warn(nostradamus);
  })

console.log(firstStudent);


// Use the fetch api to brng data

fetch('../images/home.jpg')
  .then(response => {
    console.log(response.url);
    let image = document.createElement('IMG');
    image.src = response.url;
    document.body.appendChild(image);
  })
  .catch(errMessage => {
    let createParagraph = document.createElement('P');
    createParagraph.innerText = `Something went terribly wrong!`;
    document.body.appendChild(createParagraph);
  })


try {
  console.log(whatever);
} catch (error) {
  console.log(error);
}
//////////////////////////////////////////////////////
let currentRuler = 'Cersei Lannister';

let changeRuler = name => {
  currentRuler = name;
  return currentRuler;
}

let asyncChangeRuler = (name, time) => {  // 1.create a function with argument(s)
  let promisedName = new Promise((resolve, reject) => {  // 2. create a promise object inside that function
    if (name === 'Jon Snow') {          // 3. reject (message) 
      reject('reject');       
    }
      setTimeout(() => {               //  3. resolve (value)
        resolve(name);                   
      }, time);
  })
  return promisedName;                 // 4. return promise object to that function 
}

let rulers = ['Danny', 'Jon Snow', 'Euron Greyjoy', 'Jamie Lannister', 'NightKing'];
let times = [5000, 3000, 2000, 1500, 1000]
let counter = 0;

let makeRulersAtOnce = (counter) => {
  if (counter === rulers.length) {
    return;
  }

  asyncChangeRuler(rulers[counter], times[counter])
      .then(name => {
        currentRuler = name;
        console.log(currentRuler);
        counter++;
        makeRulersAtOnce(counter);
      })
      .catch(errorMessage => {
        console.warn(errorMessage);
      })
}

makeRulersAtOnce(counter);

console.log(currentRuler);
