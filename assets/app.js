
//QuerySelectors



//Get Weather Data
async function weatherApi() {
    let weatherAPIKey = "8a9b986776d2999e3580193c86a5744c"
    let lat = "34.068623"
    let lon = "-118.027565"
    let baseUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=imperial`

    const response = await fetch(baseUrl)
    console.log(response.status)
    try {
        if (response.ok) {
            let data = await response.json()
            let cityName = data["city"]["name"]
            let currentTemp = data["list"][0]["temp"]
            let currentHumidity = data["list"][0]["main"]["humidity"]
            let weatherDescription = data["list"][0]["weather"][0]["description"]
            let currentWind = data["list"][0]["wind"]["speed"]
            //Might need to extract this and run a loop to find the date for next days " If 'includes' "
            let currentDt = (data["list"][0]["dt_txt"])

            console.log(currentWind)
            console.log(currentHumidity)
            
        } else {
            console.log(error)
        }
    } catch(err) {
        console.log(err)
    }
}

weatherApi()
