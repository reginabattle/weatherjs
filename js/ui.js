class UI {
    constructor() {
        this.location = document.querySelector('.location')
        this.description = document.querySelector('.description')
        this.temperature = document.querySelector('.temperature')
        this.icon = document.querySelector('.weather-icon')
    }

    showWeather(info) {
        this.location.innerHTML = info.name
        this.description.innerHTML = info.weather[0].description
        this.temperature.innerHTML = `${info.main.temp.toFixed()}`

        // Icon
        const img = info.weather[0].icon
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${img}@2x.png`)
    }
}

export { UI }
