// Create a toggle تبديل button ` 

let button = document.querySelector('button');
let list = document.querySelector('ul');
let items = document.querySelectorAll('ul li');
list.style.width = '25.1vw';
let listVisible = false;

let Paragraph = document.querySelector(`p`);
let secondbutton =document.querySelector(`button:nth-of-type(2)`);
let ParagraphheightFullscreen = Paragraph.clientHeight;
let Paragraphshow = true;

button.addEventListener('click', function() {
  if (listVisible) {
    list.style.opacity = '0';
    button.innerHTML = 'Show favorite destinations';
  } else {
    list.style.opacity = '1';
    button.innerHTML = 'Get them out of here!';
  }
  listVisible = !listVisible;
})

secondbutton.addEventListener(`click`,function() {
  if (Paragraphshow) {
    Paragraph.style.height = `0`;
    Paragraph.style.padding = `0`;
    secondbutton.innerHTML = 'Show text';
  } else {
    Paragraph.style.height = ParagraphheightFullscreen + `px`;
    Paragraph.style.padding = `1vw 4vw`;
    secondbutton.innerHTML = 'Hide text';
  }
  Paragraphshow =!Paragraphshow;
 })
