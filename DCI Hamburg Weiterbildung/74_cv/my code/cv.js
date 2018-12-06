document.addEventListener('DOMContentLoaded', function (ev) {
  // start      
  const yourName = document.querySelector('input[type="text"]');
  const birthday = document.querySelector('input[type="date"]');
  const millsecondInYear = 31556952000;
  let favColor = document.querySelector('#primaryColor'),
    secColor = document.querySelector('#secondaryColor'),
    fileOfImage = document.querySelector('input[type="file"]'),
    textarea = document.querySelector('textarea'),
    checkboxes = document.querySelectorAll('input[type="checkbox"]'),
    form = document.querySelector('form');    // for submit event
    baseImageURL = './images/';
    CarcharsAllow=150;
    paragraphTextMessage=document.querySelector('p.counter');

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();   // because as default it will send data and reload the page
    let section = document.createElement('SECTION');

    let heading = document.createElement('H3');
    heading.innerText = yourName.value;

    let bornDay = document.createElement('P');
    let userDate = new Date(birthday.value);
    let today = new Date();
    let age = Math.floor((today - userDate) / millsecondInYear);
    bornDay.innerHTML = `Born at: <b>${birthday.value}</b>, Age:  <b>${age}</b> `;

    let image = document.createElement('IMG');
    let newPath = fileOfImage.value.replace('C:\\fakepath\\', baseImageURL); // why two (\\), not one(\)? because with one (\) so the code will understand this for path. in order to sovle we use two (\\) to tell the code that is a string as \.
    image.src = newPath;

    let article = document.createElement('ARTICLE');
    article.innerText = textarea.value;

    section.style.background = favColor.value;
    section.style.color = secColor.value;

    let spanClose = document.createElement('SPAN');
    spanClose.innerText = 'X';

    let skillsParagraph = document.createElement('P');
    let skills = [];
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        skills.push(checkboxes[i].parentElement.innerText);
      }
    }

    skillsParagraph.innerText = `Programming Skills: ${skills.join(', ')}`;

    section.appendChild(heading);
    section.appendChild(bornDay);
    section.appendChild(image);
    section.appendChild(article);
    section.appendChild(spanClose);
    section.appendChild(skillsParagraph);

    document.body.appendChild(section);

    spanClose.addEventListener('click', function (event) {
      document.body.removeChild(event.currentTarget.parentElement);
    })

  })
  // new ideas
  yourName.addEventListener('invalid', function (ev) {
    ev.preventDefault();
    ev.currentTarget.setCustomValidity('Were you born without a name?  ');
    ev.currentTarget.nextElementSibling.innerText = ev.currentTarget.validationMessage;
    ev.currentTarget.setCustomValidity(''); // you have to empty messeg because if agin the event is valid so the above messeg will appear agin so it have to be empty
  })
  
  yourName.addEventListener('keyup', function (ev) {
    ev.currentTarget.checkValidity(); // if true that is valid ok ok , if flase that is invalid so the above addEventListener will fire
  })


  birthday.addEventListener('invalid', function (ev) {
    ev.preventDefault();
    ev.currentTarget.setCustomValidity(' wrong date ');
    ev.currentTarget.nextElementSibling.innerText = ev.currentTarget.validationMessage;
    ev.currentTarget.setCustomValidity('');
  })

   birthday.addEventListener('change', function(ev) {
    ev.currentTarget.checkValidity();
   })

   textarea.addEventListener('invalid', function (ev) {
    ev.preventDefault();
    ev.currentTarget.setCustomValidity(' you wrote 0 chracters ');
    ev.currentTarget.nextElementSibling.innerText = ev.currentTarget.validationMessage;
    ev.currentTarget.setCustomValidity('');
  })

   textarea.addEventListener('keyup', function(ev) {
     let charactersRemained=CarcharsAllow-textarea.value.length;
     paragraphTextMessage.innerHTML=`You have ${charactersRemained} left`;
    ev.currentTarget.checkValidity();
   })
})