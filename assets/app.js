
//QuerySelectors



//Get Weather Data
async function weatherApi() {
    let weatherAPIKey = "8a9b986776d2999e3580193c86a5744c"
    let lat = "34.068623"
    let lon = "-118.027565"
    let baseUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}`

    const response = await fetch(baseUrl)
    try {
        if (response.ok) {
            data = (await response.json())
        } else {
            console.log(`ERROR: ${response.status}`)
        }
    } catch (err) {
        console.log(err)
    }
    console.log(data["city"]["name"])
}

weatherApi()