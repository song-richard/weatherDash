
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
            let data = await response.json()
            let currentCity = data["city"]["name"]
            let currentTemp = data["list"][0]["main"]["temp"]
            let currentHumidity = data["list"][0]["main"]["humidity"]
            let currentDescription = data["list"][0]["weather"][0]["description"]
            let currentWind = data["list"][0]["wind"]["speed"]
            //Might need to extract this and run a loop to find the date for next days " If 'includes' "
            let currentDt = (data["list"][0]["dt_txt"])

            currentTempDiv.textContent = `Temperature: ${currentTemp}`;
            currentDescriptionDiv.textContent = `Description: ${currentDescription}`;
            currentCityDiv.textContent = `City: ${currentCity}`;
            currentDateDiv.textContent = `Date/Time: ${currentDt}`;
            currentWindDiv.textContent = `Wind: ${currentWind}`
            currentHumidityDiv.textContent = `Humidity: ${currentHumidity}`


        } 
    } catch(err) {
        console.log(err)
    }
}

