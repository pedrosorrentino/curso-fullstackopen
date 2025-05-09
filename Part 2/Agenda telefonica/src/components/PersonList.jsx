import React from 'react';

const PersonList = ({ filteredPersons, deletePerson }) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (
          <li key={person.name} style={{ display: 'flex', gap: '10px' }}>
            {person.name} - {person.number}
            <button onClick={() => deletePerson(person.id, person.name)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
