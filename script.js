const apiKey = '6555f5aa872eb40bf134456eaae87906';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const userInput = document.querySelector('.user-input');
const searchBtn = document.querySelector('.search-btn');
const weatherIcon = document.querySelector('.weather-icon');

const cityNotFound = document.querySelector('#city-not-found');
const weatherBody = document.querySelector('.weather-body');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    // const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=6555f5aa872eb40bf134456eaae87906');

    let data = await response?.json();

    console.log(data);
    
    if(data?.cod == 404) {
        cityNotFound.style.display = 'block';
        weatherBody.style.display = 'none';
        return;
    }
    

    document.querySelector('.city').innerHTML = data?.name;
    document.querySelector('.temp').innerHTML = Math.floor(data?.main?.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data?.main?.humidity + '%';
    document.querySelector('.wind').innerHTML = data?.wind?.speed + 'km/hr';

    if(data.weather[0].main === 'Clouds'){
        weatherIcon.src = './images/clouds.png'
    }else if(data.weather[0].main === 'Clear'){
        weatherIcon.src = './images/clear.png'
    }else if(data.weather[0].main === 'Drizzle'){
        weatherIcon.src = './images/drizzle.png'
    }else if(data.weather[0].main === 'Mist'){
        weatherIcon.src = './images/mist.png'
    }else if(data.weather[0].main === 'Wind'){
        weatherIcon.src = './images/wind.png'
    }else if(data.weather[0].main === 'Snow'){
        weatherIcon.src = './images/snow.png'
    }
}

searchBtn.addEventListener('click', ()=>{
   //console.log('Delhi');
    checkWeather(userInput.value);
    userInput.value = '';

})

// checkWeather()



