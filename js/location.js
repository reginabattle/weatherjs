class Location {

    // Save current position to local storage
    savePosition(position) {
        const lat =  position.coords.latitude
        const long = position.coords.longitude
    
        localStorage.setItem('lat', lat)
        localStorage.setItem('long', long)
    }

    // Get location
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.savePosition)
        } else { 
            console.log("Geolocation is not supported by this browser.")
        }
    }
}

export { Location }