import React from 'react';
import { useEffect, useState } from 'react';
import { getMeteoByCountry } from '../utils.js';

const OpenMeteo = ({ lat, lng }) => {
  const [meteo, setMeteo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMeteo = async () => {
      setError('');
      try {
        const response = await getMeteoByCountry({ lat, lng });
        setMeteo(response);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchMeteo();
  }, [lat, lng]);

  console.log(meteo);
  return (
    <div>
      {!meteo && !error && <p>Loading...</p>}
      {!meteo && error && <p>{error}</p>}
      {meteo && (
        <div>
          <p>Temperature: {meteo.current.temperature2m.toFixed(2)}°C</p>
          <p>Wind speed: {meteo.current.windSpeed10m.toFixed(2)} m/s</p>
          <p>
            Relative humidity: {meteo.current.relativeHumidity2m.toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  );
};

export default OpenMeteo;
