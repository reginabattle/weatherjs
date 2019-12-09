class Weather {
    constructor() {
        this.apiKey = '578d312670b7a7e5ff4f3b49fe8e2056'
        this.units = 'imperial'
    }

    // Fetch weather from API
    async loadWeather(lat, long) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${this.units}&appid=${this.apiKey}`)
        const weather = await response.json()
        return weather
    }

    // Fetch weather from API
    async getWeather(zipCode) {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=${this.units}&appid=${this.apiKey}`)
        const weather = await response.json()
        return weather
    }
}

export { Weather }