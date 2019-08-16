(function () {
    const axios = require('axios')

    const simpleWeather = (zip) => {
        return axios.post(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=36697159ee2bad94bfb8136b848fdb6b`)
            .then(res => {
                return [res.data.weather[0].main, parseInt(((res.data.main.temp - 273) * 9 / 5) + 32)]
            })
    }

    const simpleForecast = (zip) => {
        return axios.post(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=36697159ee2bad94bfb8136b848fdb6b`)
            .then(res => {
                return res.data.list.map(obj => {
                    return [parseInt(((obj.main.temp - 273) * 9 / 5) + 32), obj.weather[0].main, obj.dt_txt]
                })
            })
    }
    simpleWeather(94102).then(res => console.log(res))
    simpleForecast(94102).then(res => console.log(res))
})()