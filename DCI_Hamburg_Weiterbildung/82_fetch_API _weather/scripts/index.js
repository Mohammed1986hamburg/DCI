
let weatherBtn =document.querySelector(`#weather`);

let getWeatherInfo =ev => {
  let city=document.querySelector("#cityInput").value;
  const apiKey="37f675e31e0d07451325fcf4684d5e38";
  let weatherUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`;
 fetch(weatherUrl)
  .then(response => response.json())
  .then(weatherData => {  console.log(weatherData);
      // for ( allInfos of weatherData) {
            let section= document.createElement(`SECTION`);
            let cityname =document.createElement(`H4`);
            let firstHeading =document.createElement(`P`);
            let secoundHeading =document.createElement(`ARTICILE`);
            firstHeading.innerText=Math.round((weatherData.main.temp)-273);
            secoundHeading.innerText=weatherData.weather[0].description;
            cityname.innerText=weatherData.name;
            section.appendChild(cityname);
            section.appendChild(firstHeading);
              section.appendChild(secoundHeading);
            document.body.appendChild(section);
      //  }   
                           
  })

}

weatherBtn.addEventListener(`click`,getWeatherInfo); 

