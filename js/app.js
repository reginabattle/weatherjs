const ui = new UI

// Get zip code
const getZipCode = () => {
    let zipCode = document.querySelector('#zipCode').value
    if(zipCode !== '') {
        zipCode.length === 5 ? zipCode : console.log('Enter a valid zip code')
    } else {
        console.log('Enter a zip code')
        return false
    }
}

// Get current weather
const getWeather = zipCode => {
    const weather = new Weather(zipCode)
    weather.getWeather()
    .then(results => {
        ui.showWeather(results)
    })
}

// Default weather on page load 
document.addEventListener('DOMContentLoaded', () => getWeather('23220'))

// Get weather based on zip code
document.querySelector('.weather-location').addEventListener('submit', e => {
    let zipCode = getZipCode()
    if(zipCode) {
        getWeather(zipCode)
    }
    e.preventDefault()
})