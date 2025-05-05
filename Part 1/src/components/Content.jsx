import React from 'react';

const Content = ({ course }) => {
  return (
    <div>
      {course.map((part, index) => (
        <p key={index}>
          {part.name}: {part.exercises} exercises
        </p>
      ))}
    </div>
  );
};

export default Content;
