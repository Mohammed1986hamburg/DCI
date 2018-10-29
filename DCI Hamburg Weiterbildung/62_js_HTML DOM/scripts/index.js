let button = document.querySelector('button');
let headings = document.querySelectorAll('h3');
let counter = 0;

let removeHeadings = function() {
  headings[counter].style.display = 'none';
  counter++;

  button.innerHTML=`you had clicked me ${counter}`;

  if (counter === headings.length) {
    button.removeEventListener('click', removeHeadings);
  }
}

button.addEventListener('click', removeHeadings);
