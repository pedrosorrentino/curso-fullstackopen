import React from 'react';

const Total = ({ course }) => {
  return (
    <p>
      Number of exercises:{' '}
      {course.reduce((acc, part) => acc + part.exercises, 0)} in total
    </p>
  );
};

export default Total;
