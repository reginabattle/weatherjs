class Weather {
    constructor(zipCode) {
        this.apiKey = '578d312670b7a7e5ff4f3b49fe8e2056'
        this.zipCode = zipCode
    }

    // Fetch weather from APi
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.zipCode},us&units=imperial&appid=${this.apiKey}`)
        const weather = await response.json()
        return weather
    }
}