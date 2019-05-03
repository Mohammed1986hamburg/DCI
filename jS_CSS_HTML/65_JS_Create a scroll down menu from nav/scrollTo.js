let titles = document.querySelectorAll('nav > li');
let lists = document.querySelectorAll('ul');

let searchAndRemoveClassInElemnetInCss= function (listOfElements,classToFind) {
  for (let j = 0; j < listOfElements.length; j++) {
    if (listOfElements[j].classList.contains(classToFind)) {
      listOfElements[j].classList.remove(classToFind);
      return;
    }
  }
}

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', function(ev) {
    ev.stopPropagation();
    searchAndRemoveClassInElemnetInCss(lists,'active');
    lists[i].classList.add('active');
  })
}

document.body.addEventListener('click', function() {
  searchAndRemoveClassInElemnetInCss(lists,'active');
})
