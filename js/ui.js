class UI {
    constructor() {
        this.container = document.querySelector('.weather-details')
        this.location = document.querySelector('.location')
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
        const div = document.createElement('div')
        const icon = info.weather[0].icon
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`

        this.container.innerHTML = ''
        this.location.innerHTML = info.name
        
        div.classList.add('weather-temp')
        div.innerHTML = 
        `
            <img class="weather-icon" src="${iconUrl}" alt="Current weather">
            <p class="temperature">${info.main.temp.toFixed()}</p>
            <p class="description">${info.weather[0].description}</p>
        `
        this.container.appendChild(div)
    }
}

export { UI }
