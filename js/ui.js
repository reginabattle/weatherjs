class UI {
    constructor() {
        this.location = document.querySelector('.location')
        this.description = document.querySelector('.description')
        this.temperature = document.querySelector('.temperature')
        this.icon = document.querySelector('.weather-icon')
    }

    showWeather(info) {
        // Location
        this.location.innerHTML = info.name

        // Description
        this.description.innerHTML = info.weather[0].description

        // Temperature
        this.temperature.innerHTML = `${info.main.temp.toFixed()}&deg;F`

        // Icon
        const img = info.weather[0].icon
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${img}@2x.png`)
    }
}
