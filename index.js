(function () {
    const axios = require('axios')

    const simpleWeather = (zip) => {
        return axios.post(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=36697159ee2bad94bfb8136b848fdb6b`)
            .then(res => {
                return [res.data.weather[0].main, parseInt(((res.data.main.temp - 273) * 9 / 5) + 32)]
            })
    }

    simpleWeather(94102).then(res => console.log(res))
})()