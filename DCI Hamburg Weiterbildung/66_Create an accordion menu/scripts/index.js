let a = document.querySelectorAll('a');
let sections = document.querySelectorAll('section');

let searchAndRemoveClassInElemnetInCss= function (listOfElements,classToFind) {
  for (let j = 0; j < listOfElements.length; j++) {
    if (listOfElements[j].classList.contains(classToFind)) {
      listOfElements[j].classList.remove(classToFind);
      return;
    }
  }
}

for (let i = 0; i < a.length; i++) {
  a[i].addEventListener('click', function(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    searchAndRemoveClassInElemnetInCss(sections,'active');
    sections[i].classList.add('active');
  })
}

document.body.addEventListener('click', function() {
  searchAndRemoveClassInElemnetInCss(sections,'active');
})




