import React from 'react';

const FormSearch = ({ search, setSearch, handleSubmit, handleClearSearch }) => {
  return (
    <div>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='search-input'
        />
        <button type='submit'>Search country...</button>
        <button type='button' onClick={handleClearSearch}>
          Clear Search
        </button>
      </form>
    </div>
  );
};

export default FormSearch;
