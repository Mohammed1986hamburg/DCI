let images = document.querySelectorAll('img');
let leftArrow = document.querySelector('span.left');
let rightArrow = document.querySelector('span.right');
let score = 0;

rightArrow.addEventListener('click', function(ev) {
  score++;
  if (score === images.length) {
    score = 0;
  }
  console.log(score);
  for (let i = 0; i < images.length; i++) {
    images[i].style.transform = `translate(${score * -50}vw, 0)`;
  }
})

leftArrow.addEventListener('click', function(ev) {
  score--;
  if (score < 0) {
    score = images.length - 1;
  }
  console.log(score);
  for (let i = 0; i < images.length; i++) {
    images[i].style.transform = `translate(${score * -50}vw, 0)`;
  }
})
