import { useState, useEffect } from 'react';
import { getCountries } from './utils.js';
import CountriesList from './components/CountriesList.jsx';
import FormSearch from './components/FormSearch.jsx';
import OpenMeteo from './components/OpenMeteo.jsx';

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCountries = async () => {
      setError('');
      try {
        const response = await getCountries();
        setCountries(response);
      } catch (error) {
        setError('Error fetching countries!');
      }
    };
    fetchCountries();
  }, []);

  const handleSubmit = (e) => {
    setError('');
    e.preventDefault();
    const results = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
    if (results.length === 0) {
      setError('No results found. Please refine your search.');
    } else if (results.length === 1) {
      setFilteredCountries(results);
    } else if (results.length > 10) {
      setError('Too many results. Please refine your search.');
    } else {
      setFilteredCountries(results);
    }
  };

  const handleClearSearch = () => {
    setError('');
    setSearch('');
    setFilteredCountries([]);
  };

  const handleShowOneCountry = (country) => {
    const results = countries.filter(
      (c) => c.name.common.toLowerCase() === country.toLowerCase()
    );
    setError('');
    setSearch('');
    setFilteredCountries(results);
  };

  return (
    <div>
      <FormSearch
        search={search}
        setSearch={setSearch}
        handleSubmit={handleSubmit}
        handleClearSearch={handleClearSearch}
      />
      {error && <p>{error}</p>}
      {countries.length === 0 && <p>Loading...</p>}
      {filteredCountries.length === 0 &&
        countries.length > 0 &&
        error === '' && (
          <div>
            <p>
              Hello! User the search bar to find countries. We have{' '}
              {countries.length} countries in our database.
            </p>
          </div>
        )}
      {filteredCountries.length === 1 && (
        <div>
          <h2>
            {filteredCountries[0].flag} {filteredCountries[0].name.common}
          </h2>
          <p style={{ fontSize: '1.2rem' }}>
            {filteredCountries[0].name.official}
          </p>
          <p>Population: {filteredCountries[0].population}</p>
          <p>
            Languages:{' '}
            {Object.values(filteredCountries[0].languages).join(', ')}
          </p>
          <p>Capital: {filteredCountries[0].capital[0]}</p>
          <img style={{ width: '30%' }} src={filteredCountries[0].flags.svg} />
          <OpenMeteo
            lat={filteredCountries[0].latlng[0]}
            lng={filteredCountries[0].latlng[1]}
          />
        </div>
      )}
      {filteredCountries.length > 1 && (
        <CountriesList
          countries={filteredCountries}
          handleShowOneCountry={handleShowOneCountry}
        />
      )}
    </div>
  );
}

export default App;
