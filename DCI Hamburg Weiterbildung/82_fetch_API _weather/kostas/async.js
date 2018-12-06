

const authToken = '37f675e31e0d07451325fcf4684d5e38';
const btn = document.querySelector('button');
const form = document.querySelector('form');
const inputField = document.querySelector('input');
const divContainer = document.querySelector('#container');

const colorTemperatures = [
  {limitTemp: 40, color: 'red'},
  {limitTemp: 35, color: 'orange'},
  {limitTemp: 30, color: 'yellow'},
  {limitTemp: 20, color: 'deepskyblue'},
  {limitTemp: 10, color: 'purple'},
  {limitTemp: 0, color: 'grey'},
  {limitTemp: -100, color: 'white'}
];

let getWeatherForCity = ev => {
  ev.preventDefault();
  let city = inputField.value;
  let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${authToken}`;
  fetch(weatherUrl)
    .then(res => res.json())
    .then(weatherData => {
      console.log(weatherData);
      let section = document.createElement('SECTION');
      let heading = document.createElement('H3');
      let tempParagraph = document.createElement('P');
      let desc = document.createElement('SPAN');
      let littleImage = document.createElement('IMG');
      let footer = document.createElement('FOOTER');
      let tempInCelsius = Math.round(weatherData.main.temp - 273);
      let color = colorTemperatures.find(entry => tempInCelsius > entry.limitTemp).color;
      heading.innerText = weatherData.name;
      tempParagraph.innerHTML = `<b>${tempInCelsius}</b> <sup>O</sup>C`;
      desc.innerText = weatherData.weather[0].description;
      littleImage.src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
      section.appendChild(heading);
      section.appendChild(tempParagraph);
      footer.appendChild(desc);
      footer.appendChild(littleImage);
      section.appendChild(footer);
      section.style.background = color;
      divContainer.appendChild(section);
      inputField.value = '';
      inputField.focus();
    })
    .catch(errorMsg => {
      console.error(errorMsg);
    })
}

form.addEventListener('submit', getWeatherForCity);




