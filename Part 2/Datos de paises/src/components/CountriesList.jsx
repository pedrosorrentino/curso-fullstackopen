import React from 'react';

const CountriesList = ({ countries, handleShowOneCountry }) => {
  return (
    <div>
      {countries.map((country) => (
        <div>
          <p key={country.name.common} className='country-detail'>
            {country.flag} {country.name.official}
            <button onClick={() => handleShowOneCountry(country.name.common)}>
              Show details
            </button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default CountriesList;
