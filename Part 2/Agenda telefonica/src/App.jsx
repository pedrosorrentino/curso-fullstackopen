import React, { useState, useEffect } from 'react';
import Filter from './components/Filter.jsx';
import PersonForm from './components/PersonForm.jsx';
import PersonList from './components/PersonList.jsx';
import { getPersons, addPerson, deletePerson, updatePerson } from './utils.js';
import MessageBox from './components/MessageBox.jsx';

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchPersons = async () => {
      setError('');
      try {
        const data = await getPersons();
        setPersons(data);
      } catch (error) {
        console.error('Error fetching persons:', error);
        setError('Error fetching persons!');
      }
    };
    fetchPersons();
  }, []);

  const newPersonDB = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');
    if (!persons.some((person) => person.name === newName)) {
      try {
        const newPerson = {
          name: newName,
          number: newNumber,
        };
        const response = await addPerson(newPerson.name, newPerson.number);
        setSuccess(newPerson.name + ' added successfully!');
        setTimeout(() => setSuccess(''), 2000);
        setPersons([...persons, response]);
        setNewName('');
        setNewNumber('');
      } catch (error) {
        setError('Error adding person!');
      }
    } else {
      alert(
        `${newName} is already in the phonebook. Replace old number with new one?`
      );
      try {
        const actualPerson = persons.find((person) => person.name === newName);

        const newPerson = {
          id: actualPerson.id,
          name: actualPerson.name,
          number: newNumber,
        };
        await updatePerson(newPerson.id, newPerson.name, newPerson.number);
        setSuccess(newPerson.name + ' updated successfully!');
        setTimeout(() => setSuccess(''), 2000);
        setPersons(
          persons.map((person) =>
            person.id === newPerson.id ? newPerson : person
          )
        );
        setNewName('');
        setNewNumber('');
      } catch (error) {
        setError(`Error updating the phone of ${newName}!`);
      }
    }
  };

  const removePersonDB = async (id, name) => {
    setSuccess('');
    setError('');
    try {
      await deletePerson(id);
      setSuccess(name + ' deleted successfully!');
      setTimeout(() => setSuccess(''), 2000);
      setPersons(persons.filter((person) => person.id !== id));
    } catch (error) {
      setError('Error deleting ' + name + '!');
    }
  };

  const handleFilterName = (e) => {
    setFilter(e.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Filter handleFilterName={handleFilterName} />
      <PersonForm
        addPerson={newPersonDB}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <PersonList
        filteredPersons={filteredPersons}
        deletePerson={removePersonDB}
      />
      <MessageBox success={success} error={error} />
    </div>
  );
}

export default App;
