import axios from 'axios';

export const getPersons = async () => {
  const response = await axios.get('http://localhost:3000/persons');
  return response.data;
};

export const getPerson = async (id) => {
  const response = await axios.get(`http://localhost:3000/persons/${id}`);
  return response.data;
};

export const addPerson = async (name, number) => {
  const response = await axios.post('http://localhost:3000/persons', {
    name,
    number,
  });
  return response.data;
};

export const updatePerson = async (id, name, number) => {
  const response = await axios.put(`http://localhost:3000/persons/${id}`, {
    name,
    number,
  });
  return response.data;
};

export const deletePerson = async (id) => {
  const response = await axios.delete(`http://localhost:3000/persons/${id}`);
  return response.data;
};
