class UI {
    constructor() {
        this.container = document.querySelector('.weather-temp')
        this.location = document.querySelector('.location')
        this.description = document.querySelector('.description')
        this.temperature = document.querySelector('.temperature')
        this.icon = document.querySelector('.weather-icon')
    }

    showLoading() {
        const div = document.createElement('div')
        div.classList.add('loading')
        this.container.appendChild(div)

        setTimeout(() => {
            div.remove()
        }, 1000)
    }

    showWeather(info) {
        const icon = info.weather[0].icon
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`

        this.location.innerHTML = info.name
        this.container.innerHTML += `<img class="weather-icon" src="${iconUrl}" alt="Current weather">`
        this.container.innerHTML += `<p class="temperature">${info.main.temp.toFixed()}</p>`
        this.container.innerHTML += `<p class="description">${info.weather[0].description}</p>`
    }
}

export { UI }
