let titles = document.querySelectorAll('nav > li');
let posters = document.querySelectorAll('section');
let nav = document.querySelector('nav');

let heightToExecute = nav.clientHeight + 250;

window.addEventListener('scroll', function(ev) {

  for (let i = 0; i < posters.length; i++) {

    if (window.pageYOffset >= posters[i].offsetTop - heightToExecute && window.pageYOffset < posters[i+1].offsetTop - heightToExecute) {
      for (let j = 0; j < titles.length; j++) {
        if (titles[j].classList.contains('changeColor')) {
          titles[j].classList.remove('changeColor');
          break;
        }
      }
      titles[i].classList.add('changeColor');
      posters[i].style.opacity = '1';
    }

  }

})
