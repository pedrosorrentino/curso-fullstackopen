import React from 'react';

const Filter = ({ handleFilterName }) => {
  return (
    <div>
      <h2>Filter by name</h2>
      <input
        type='text'
        placeholder='Filter by name'
        onChange={handleFilterName}
      />
    </div>
  );
};

export default Filter;
