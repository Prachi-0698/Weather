const apiKey = '6555f5aa872eb40bf134456eaae87906';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';

const userInput = document.querySelector('.user-input');
const searchBtn = document.querySelector('.search-btn');

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response?.json();

    console.log(data);

    // document.querySelector('.city').innerHTML = data?.name;
    // document.querySelector('.temp').innerHTML = Math.floor(data?.main?.temp) + '°C';
    // document.querySelector('.humidity').innerHTML = data?.main?.humidity + '%';
    // document.querySelector('.wind').innerHTML = data?.wind?.speed + 'km/hr';
}

// searchBtn.addEventListener('click', ()=>{
//     console.log('Delhi');
//     checkWeather(userInput.value);

// })

checkWeather()



