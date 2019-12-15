import 'babel-polyfill'
import { Weather } from './weather'
import { Location } from './location'
import { UI} from './ui'

const weather = new Weather
const location = new Location
const ui = new UI

// Get zip code
const getZipCode = () => {
    let zipCode = document.querySelector('#zipCode').value
    if(zipCode != '') {
        if(zipCode.length === 5) {
            return zipCode 
        } else {
            console.log('Enter a valid zip code')
        }
    } else {
        console.log('Enter a zip code')
        return false
    }
}

// Load weather based on geolocation
const loadWeather = (lat, long) => {
    weather.loadWeather(lat, long)
    .then(results => {
        ui.showLoading()
        setTimeout(() => {
            ui.showWeather(results)
        }, 1000) 
    })
}

// Get current weather based on zip code
const getWeather = zipCode => {
    weather.getWeather(zipCode)
    .then(results => {
        ui.showWeather(results)
    })
}

// Default weather on page load 
document.addEventListener('DOMContentLoaded', () => {
    location.getLocation()

    const lat = localStorage.getItem('lat')
    const long = localStorage.getItem('long')
    
    if(lat && long) {
        loadWeather(lat, long)
    } else {
        //getWeather('23220')
    }
})

// Get zip code 
document.querySelector('.weather-location').addEventListener('submit', e => {
    let zipCode = getZipCode()
    if(zipCode) {
        getWeather(zipCode)
    }
    e.preventDefault()
})