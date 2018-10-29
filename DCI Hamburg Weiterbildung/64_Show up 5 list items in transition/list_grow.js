let button = document.querySelector('button');
let items = document.querySelectorAll('li');

let itemVisible = true;

let toggleListItems = function() {
  if (itemVisible) {
    for (let i = 0; i < items.length; i++) {
      items[i].style.transition = `all 0.7s ease-out ${i / 5}s`;
      items[i].style.width = '0';
      items[i].style.padding = '0';
      items[i].style.fontSize = '0vw';
    }
  } else {
    for (let i = 0; i < items.length; i++) {
      items[i].style.width = '100%';
      items[i].style.padding = '1vw 0.2vw';
      items[i].style.fontSize = '2.5vw';
    }
  }
  itemVisible = !itemVisible;
}

button.addEventListener('click', toggleListItems);
