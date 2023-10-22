
// let weatherAPIKey = "8a9b986776d2999e3580193c86a5744c"
// let lat = "34.068623"
// let lon = "-118.027565"

// let baseUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}`

async function weatherApi() {
    let weatherAPIKey = "8a9b986776d2999e3580193c86a5744c"
    let lat = "34.068623"
    let lon = "-118.027565"
    let baseUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}`

    const weatherResponse = await fetch(baseUrl)
    try {
        if (weatherResponse.ok) {
            const weatherData = await weatherResponse.json();
            console.log(weatherData)
        } else {
            console.log(weatherResponse.status)
        }
    } catch(err) {
        console.log(err)
    }
}

weatherApi()