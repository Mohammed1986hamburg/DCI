let yourName = document.querySelector('input[type="text"]');
let birthday = document.querySelector('input[type="date"]');  
let fileOfImage = document.querySelector('input[type="file"]');
let favColor = document.querySelector('#primaryColor');
let secColor = document.querySelector('#secondaryColor');
let form = document.querySelector('form');
let textarea = document.querySelector('textarea');
let button = document.querySelector('button');
let baseImageURL = './images/';
let checkboxes = document.querySelectorAll('input[type="checkbox"]');

form.addEventListener('submit', function(ev) {
  ev.preventDefault();
  let section = document.createElement('SECTION');
  let heading = document.createElement('H3');
  let bornDay = document.createElement('P');
  let image = document.createElement('IMG');
  let article = document.createElement('ARTICLE');
  let spanClose = document.createElement('SPAN');
  let skillsParagraph = document.createElement('P');

  let imageURL = fileOfImage.value.substr(fileOfImage.value.lastIndexOf('\\'), fileOfImage.value.length - 1);
  let unifiedURL = imageURL.split('');
  unifiedURL.shift();
  let endString = baseImageURL + unifiedURL.join('');

  heading.innerText = yourName.value;
  bornDay.innerHTML = `Born at: <b>${birthday.value}</b>`;
  image.src = endString;
  article.innerText = textarea.value;

  section.style.background = favColor.value;
  section.style.color = secColor.value;

  let skills = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      skills.push(checkboxes[i].parentElement.innerText);
    }
  }

  skillsParagraph.innerText = `Programming Skills: ${skills.join(', ')}`;

  spanClose.innerText = 'X';

  section.appendChild(heading);
  section.appendChild(bornDay);
  section.appendChild(image);
  section.appendChild(article);
  section.appendChild(spanClose);
  section.appendChild(skillsParagraph);

  document.body.appendChild(section);

  spanClose.addEventListener('click', function(event) {
    document.body.removeChild(event.currentTarget.parentElement);
  })

})
