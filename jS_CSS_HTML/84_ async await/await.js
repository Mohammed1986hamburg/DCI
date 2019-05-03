const authToken = '16d4785f9c10724266053adb3c29dcfd';
const city = 'Damascus';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${authToken}`;


// async + await 
let getWeather = async url => { //1.write 'async' to do async function

  try {//2. this is like .then
    //4. write "await" to every async fun as fetch and json,
    // it will not go the next until the responce to come 
    // if no responce so will go to catch
    let res =  await fetch(url); 
    let data = await res.json();
    console.log(data);
  } 
  catch(error) {  //3.this is like .catch
    console.warn(error);
  }


}


getWeather(weatherUrl);
console.log('after');
