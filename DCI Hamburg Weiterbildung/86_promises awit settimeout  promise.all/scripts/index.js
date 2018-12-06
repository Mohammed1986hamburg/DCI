//to use asynchronous function with dealy timeout  

const imageNames = ['a1', 'a2', 'a3', 'a4']; 
//names of images
const button = document.querySelector('button');
const container = document.querySelector('#container');

let bringImages = array => {
  let promiseImages = [];

  for (imageName of array) {
    let url = `../images/${imageName}.jpg`;
    let imagePromise = new Promise((resolve, reject) => {
      resolve(fetch(url)); 
      // return promise 
    })
    promiseImages.push(imagePromise); 
    // to push all promise to this array (that is more requst and store)
  }
  console.log(promiseImages);

  return Promise.all(promiseImages);
  //Promise.all ??
  // I can to return dirctally the promises array "promiseImages",
  // but may will return a rejected promise.

  // so I will use Promise.all(promiseImages) to return all promise as 
  //resolved not one  rejected.
}

let showImages = async ev => {
  let responses = await bringImages(imageNames);
  let counter = 0;

  let myInterval = setInterval(() => {
    if (counter === responses.length - 1) {
      clearInterval(myInterval);
    }
    let newImage = document.createElement('IMG');
    newImage.src = responses[counter].url;
    container.appendChild(newImage);
    counter++;
  }, 200)

}

button.addEventListener('click', showImages);