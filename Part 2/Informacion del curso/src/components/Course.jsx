import React from 'react';

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <h1>{course.name}</h1>
          <div>
            {course.parts.map((part) => (
              <div key={part.id}>
                <p>
                  {part.name}: {part.exercises} exercises
                </p>
              </div>
            ))}
          </div>
          <p>
            Total exercises:{' '}
            {course.parts.reduce((acc, part) => acc + part.exercises, 0)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Course;
