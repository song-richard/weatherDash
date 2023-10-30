
let weatherAPIKey = "8a9b986776d2999e3580193c86a5744c"
let lat = "34.068623"
let lon = "-118.027565"
let baseUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=imperial`

//QuerySelectors
let currentTempDiv = document.querySelector('#todayTemp')
let currentDescriptionDiv = document.querySelector('#todayDescription')
let currentCityDiv = document.querySelector('#todayCity')
let currentDateDiv = document.querySelector('#todayDate')
let currentWindDiv = document.querySelector('#todayWind')
let currentHumidityDiv = document.querySelector('#todayHumidity')

let searchInput = document.querySelector('#search-input')
let searchButton = document.querySelector('#search-btn')

//Convert City Name to Lat/Long
let inputtedCity = ""
let findLatLongUrl = ""

async function latLongApi() {
    const response = await fetch(findLatLongUrl)
    try {
        if (response.ok) {
            let data = await response.json();
            console.log(data)
            let fetchedLat = data[0]["lat"]
            let fetchedLon = data[0]["lon"]
            lat = fetchedLat
            lon = fetchedLon
            weatherApi()
        } else {
            console.log("Response not OK")
        }
    }
    catch (err) {
        console.log(err)
    }
}

searchButton.addEventListener('click', function() {
    inputtedCity = searchInput.value;
    findLatLongUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${inputtedCity}&appid=${weatherAPIKey}`
    latLongApi();
})

// Get Weather Data
async function weatherApi() {
    const baseUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=imperial`
    const response = await fetch(baseUrl)
    console.log(response.status)
    try {
        if (response.ok) {
            //Query Selectors for CURRENT DAY
            let data = await response.json()
            let currentCity = data["city"]["name"]
            let currentTemp = data["list"][0]["main"]["temp"]
            let currentHumidity = data["list"][0]["main"]["humidity"]
            let currentDescription = data["list"][0]["weather"][0]["description"]
            let currentWind = data["list"][0]["wind"]["speed"]
            //Might need to extract this and run a loop to find the date for next days " If 'includes' "
            let currentDt = (data["list"][0]["dt_txt"])
            currentDateDiv.textContent = `Date/Time: ${currentDt}`;
            currentCityDiv.textContent = `City: ${currentCity}`;
            currentTempDiv.textContent = `Temperature: ${currentTemp}`;
            currentDescriptionDiv.textContent = `Description: ${currentDescription}`;
            currentWindDiv.textContent = `Wind: ${currentWind}`
            currentHumidityDiv.textContent = `Humidity: ${currentHumidity}`

            //Day 1 Forecast
            let dayOneForecastDateDiv = document.querySelector('#forecast-day-1-date');
            let dayOneForecastTempDiv = document.querySelector('#forecast-day-1-temp')
            let dayOneForecastWindDiv = document.querySelector('#forecast-day-1-wind')
            let dayOneForecastHumidityDiv = document.querySelector('#forecast-day-1-humidity')
            dayOneForecastDateDiv.textContent = `Date: ${data["list"][7]["dt_txt"]}`
            dayOneForecastTempDiv.textContent = `Temperature: ${data["list"][7]["main"]["temp"]} F`
            dayOneForecastWindDiv.textContent = `Wind: ${data["list"][7]["wind"]["speed"]} MPH`
            dayOneForecastHumidityDiv.textContent = `Humidity: ${data["list"][0]["main"]["humidity"]}`

            //Day 2 Forecast
            let dayTwoForecastDateDiv = document.querySelector('#forecast-day-2-date');
            let dayTwoForecastTempDiv = document.querySelector('#forecast-day-2-temp')
            let dayTwoForecastWindDiv = document.querySelector('#forecast-day-2-wind')
            let dayTwoForecastHumidityDiv = document.querySelector('#forecast-day-2-humidity')
            dayTwoForecastDateDiv.textContent = `Date: ${data["list"][15]["dt_txt"]}`
            dayTwoForecastTempDiv.textContent = `Temperature: ${data["list"][15]["main"]["temp"]} F`
            dayTwoForecastWindDiv.textContent = `Wind: ${data["list"][15]["wind"]["speed"]} MPH`
            dayTwoForecastHumidityDiv.textContent = `Humidity: ${data["list"][15]["main"]["humidity"]}`

            //Day 3 Forecast
            let dayThreeForecastDateDiv = document.querySelector('#forecast-day-3-date');
            let dayThreeForecastTempDiv = document.querySelector('#forecast-day-3-temp')
            let dayThreeForecastWindDiv = document.querySelector('#forecast-day-3-wind')
            let dayThreeForecastHumidityDiv = document.querySelector('#forecast-day-3-humidity')
            dayThreeForecastDateDiv.textContent = `Date: ${data["list"][23]["dt_txt"]}`
            dayThreeForecastTempDiv.textContent = `Temperature: ${data["list"][23]["main"]["temp"]} F`
            dayThreeForecastWindDiv.textContent = `Wind: ${data["list"][23]["wind"]["speed"]} MPH`
            dayThreeForecastHumidityDiv.textContent = `Humidity: ${data["list"][23]["main"]["humidity"]}`

            //Day 4 Forecast
            let dayFourForecastDateDiv = document.querySelector('#forecast-day-4-date');
            let dayFourForecastTempDiv = document.querySelector('#forecast-day-4-temp')
            let dayFourForecastWindDiv = document.querySelector('#forecast-day-4-wind')
            let dayFourForecastHumidityDiv = document.querySelector('#forecast-day-4-humidity')
            dayFourForecastDateDiv.textContent = `Date: ${data["list"][31]["dt_txt"]}`
            dayFourForecastTempDiv.textContent = `Temperature: ${data["list"][31]["main"]["temp"]} F`
            dayFourForecastWindDiv.textContent = `Wind: ${data["list"][31]["wind"]["speed"]} MPH`
            dayFourForecastHumidityDiv.textContent = `Humidity: ${data["list"][31]["main"]["humidity"]}`

            // Day 5F orecast
            let dayFiveForecastDateDiv = document.querySelector('#forecast-day-5-date');
            let dayFiveForecastTempDiv = document.querySelector('#forecast-day-5-temp')
            let dayFiveForecastWindDiv = document.querySelector('#forecast-day-5-wind')
            let dayFiveForecastHumidityDiv = document.querySelector('#forecast-day-5-humidity')
            dayFiveForecastDateDiv.textContent = `Date: ${data["list"][39]["dt_txt"]}`
            dayFiveForecastTempDiv.textContent = `Temperature: ${data["list"][39]["main"]["temp"]} F`
            dayFiveForecastWindDiv.textContent = `Wind: ${data["list"][39]["wind"]["speed"]} MPH`
            dayFiveForecastHumidityDiv.textContent = `Humidity: ${data["list"][39]["main"]["humidity"]}`
        } 
    } catch(err) {
        console.log(err)
    }
}
