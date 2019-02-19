let input = document.querySelector('input');
let button = document.querySelector('button');
let section = document.querySelector('section');
let form = document.querySelector('form');
let counterID=localStorage.length;

//Check if local storage has something and render them before everything!
if (localStorage.length > 0) {

  for (let task in localStorage) {

    // to get only the storge value, because the localstroage has stotge proto also 
    if (typeof localStorage[task] !== 'string') {  
      break;
    }

    let paragraph = document.createElement('P');
    paragraph.innerText = localStorage[task];
    let spanCloseButton = document.createElement('SPAN');
    spanCloseButton.innerText = 'X';
    paragraph.appendChild(spanCloseButton);
    section.appendChild(paragraph);

    spanCloseButton.addEventListener('click', function(ev) {
      let paragraphToBeRemoved = ev.currentTarget.parentElement;
      section.removeChild(paragraphToBeRemoved);
    })
  }
}

form.addEventListener('submit', function(event) {
  counterID++;

  event.preventDefault();

  let text = input.value;
  let paragraph = document.createElement('P');
  let spanCloseButton = document.createElement('SPAN');
  spanCloseButton.innerText = 'X';
  paragraph.innerText = text;
  paragraph.appendChild(spanCloseButton);
  section.appendChild(paragraph);

  localStorage.setItem(`task-${counterID}`, text);

  console.log(localStorage);
  input.value = '';

  spanCloseButton.addEventListener('click', function(ev) {
    let paragraphToBeRemoved = ev.currentTarget.parentElement;
    section.removeChild(paragraphToBeRemoved);
  })
})
