import axios from 'axios';
import { fetchWeatherApi } from 'openmeteo';

export const getCountries = async () => {
  const response = await axios.get(
    'https://studies.cs.helsinki.fi/restcountries/api/all'
  );
  return response.data;
};

export const getMeteoByCountry = async ({ lat, lng }) => {
  const params = {
    latitude: lat,
    longitude: lng,
    current: ['temperature_2m', 'relative_humidity_2m', 'wind_speed_10m'],
  };
  const url = 'https://api.open-meteo.com/v1/forecast';
  const responses = await fetchWeatherApi(url, params);
  const response = responses[0];

  const utcOffsetSeconds = response.utcOffsetSeconds();
  const current = response.current();

  const weatherData = {
    current: {
      time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
      temperature2m: current.variables(0).value(),
      relativeHumidity2m: current.variables(1).value(),
      windSpeed10m: current.variables(2).value(),
    },
  };
  return weatherData;
};
