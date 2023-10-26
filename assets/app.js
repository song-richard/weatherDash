
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
            console.log(await response.json())
        } else {
            console.log(error)
        }
    } catch(err) {
        console.log(err)
    }
}
weatherApi()

