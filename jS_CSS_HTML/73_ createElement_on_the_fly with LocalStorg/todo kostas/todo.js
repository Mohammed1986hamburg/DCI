let input = document.querySelector('input');
let button = document.querySelector('button');
let section = document.querySelector('section');
let form = document.querySelector('form');
let counterID = localStorage.counterID || 0;

// Check if local storage has something and render them before everything!

let removeElements = function(ev, elemRemoved, parentOfRemoval) {
  let paragraphToBeRemoved = ev.currentTarget.parentElement;
  let paragraphIdentifier = elemRemoved.getAttribute('identifier');
  localStorage.removeItem(paragraphIdentifier);
  parentOfRemoval.removeChild(paragraphToBeRemoved);
}

if (localStorage.length > 0) {

  for (let task in localStorage) {

    if (typeof localStorage[task] !== 'string') {
      break;
    }

    if (task === 'counterID') {
      continue;
    }

    let paragraph = document.createElement('P');
    paragraph.innerText = localStorage[task];
    paragraph.setAttribute('identifier', `${task}`);
    let spanCloseButton = document.createElement('SPAN');
    spanCloseButton.innerText = 'X';
    paragraph.appendChild(spanCloseButton);
    section.appendChild(paragraph);

    spanCloseButton.addEventListener('click', function(ev) {
      removeElements(ev, paragraph, section);
    });
  }
}

form.addEventListener('submit', function(event) {
  counterID++;
  localStorage.setItem(`counterID`, counterID);
  event.preventDefault();
  let text = input.value;

  let paragraph = document.createElement('P');
  let spanCloseButton = document.createElement('SPAN');

  spanCloseButton.innerText = 'X';

  paragraph.innerText = text;

  paragraph.setAttribute('identifier', `task-${localStorage.getItem('counterID')}`);

  paragraph.appendChild(spanCloseButton);

  section.appendChild(paragraph);

  localStorage.setItem(`task-${counterID}`, text);

  console.log(localStorage);

  input.value = '';

  spanCloseButton.addEventListener('click', function(ev) {
    removeElements(ev, paragraph, section);
  });
})
