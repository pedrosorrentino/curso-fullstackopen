import React from 'react';

const PersonForm = ({
  addPerson,
  newName,
  newNumber,
  setNewName,
  setNewNumber,
}) => {
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '200px',
            gap: '10px',
          }}
        >
          <input
            type='text'
            placeholder='Name'
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type='number'
            placeholder='Number'
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        </div>
        <br />
        <button type='submit'>add/update</button>
      </form>
    </div>
  );
};

export default PersonForm;
