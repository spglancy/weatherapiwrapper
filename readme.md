# OpenWeatherMap Wrapper
The goal of this project was to create a simple wrapper for the OpenWeatherMap API.

## Functions
### SimpleWeather(zip)
SimpleWeather returns a list with a description of the weather for the selected area and the current temperature in Farenheit.
##### Example:
```js
['Rainy', 55]
```
### SimpleForecast(zip)
SimpleForecast returns a list of the forecasts for the next 5 days in the selected area with each forecast being a list containing the weather description, the projected temperature, and the time of the forecast.
##### Example:
```js
[['Rainy', 55, 3:00]
 ['Cloudy', 68, 5:00]
 ['Sunny', 75, 8:00]
 ['Snowy', 20, 10:00]]
```