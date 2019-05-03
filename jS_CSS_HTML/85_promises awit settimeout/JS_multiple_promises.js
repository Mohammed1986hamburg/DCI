const button = document.querySelector('button');
const container = document.querySelector('#container');
const imageNames = ['home', 'bahnhof', 'syvota', 'athens'];

let makeFetch = (name, time) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(fetch(`../images/${name}.jpg`))
      }, time)
  })
}

let fetchImages = async (ev, collection) => {
  for (imageName of collection) {
    let homeImage = await makeFetch(imageName, 150);
    console.log(homeImage);
    let newImage = document.createElement('IMG');
    newImage.src = homeImage.url;
    container.appendChild(newImage);
  }

}

button.addEventListener('click', function jens(ev) {
  ev.currentTarget.removeEventListener('click', jens);
  fetchImages(ev, imageNames);
});
