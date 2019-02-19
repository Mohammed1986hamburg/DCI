let images = document.querySelectorAll('.section1 img');
let leftArrow = document.querySelector('.arrow_left');
let rightArrow = document.querySelector('.arrow_right');
let liste =document.querySelectorAll(`#contact_li,#Home,#Band,#Tour`);
let section = document.querySelectorAll(`.section1,.section2,.section3,.section4,.section5`);
let go_Up =document.querySelector(`.section6 span`);
let ul_Items=document.querySelector(`.The_ul`);
let More=document.querySelector(`#More`);
let img_Toggle=document.querySelectorAll(`footer img`);
let p_Toggle=document.querySelectorAll(`footer p`);
let section2=document.querySelectorAll(`.section2`);



let score = 0;
var frame;

 let frameimg = function() {
frame =setInterval (function(){
score++;
if (score === images.length) {
  score = 0;
}

for (let i = 0; i < images.length; i++) {
  images[i].style.transform = `translate(${score * -100}vw, 0)`;
}
},5000)
}
frameimg();

 rightArrow.addEventListener('click', function(ev) {
      clearInterval(frame);
  score++;
  if (score === images.length) {
    score = 0;
  }

  for (let i = 0; i < images.length; i++) {
    images[i].style.transform = `translate(${score * -100}vw, 0)`;
  }
frameimg();
})
 leftArrow.addEventListener('click', function(ev) {
      clearInterval(frame);
  score--;
  if (score < 0) {
    score = images.length - 1;
  }

  for (let i = 0; i < images.length; i++) {
    images[i].style.transform = `translate(${score * -100}vw, 0)`;
  }
  frameimg();
})

let scroll_To =function() {
  for (let i = 0; i < section.length; i++) {

    if (window.pageYOffset >= section[i].offsetTop && window.pageYOffset < section[i+1].offsetTop ){

    for (let j = 0; j < liste.length; j++) {
            if (liste[j].classList.contains('changeColor')) {
              liste[j].classList.remove('changeColor');
              break;
            }
          }
          liste[i].classList.add('changeColor');
        }
    }
return;
}

let goDwon= function() {
window.removeEventListener(`scroll`,scroll_To);
go_down = setInterval( function() {
for (let i = 0; i < liste.length; i++) {
liste[i].addEventListener('click', function(ev) {

  window.scrollTo(0,section[i].offsetTop-70);
  liste[i].classList.add(changeColor);

})

}
},2000);
}
goDwon();


let goUp = function() {

go_Up.addEventListener('click', function(ev) {
  window.scrollTo(0,0);

})
}
goUp();

More.addEventListener('click', function(ev)  {
ev.stopPropagation();
  ul_Items.classList.toggle(`ul_active`);


})
window.addEventListener('click', function(ev)  {
  ul_Items.classList.remove(`ul_active`);

})

for (let i = 0; i < img_Toggle.length; i++) {

img_Toggle[i].addEventListener('click', function(ev)  {
ev.stopPropagation();
  p_Toggle[i].classList.toggle(`show_p`);


  })
  window.addEventListener('click', function(ev)  {
    p_Toggle[i].classList.remove(`show_p`);



})



}


window.addEventListener(`scroll`,scroll_To);
