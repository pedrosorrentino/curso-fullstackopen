import React from 'react';

const MessageBox = ({ success, error }) => {
  if (error) {
    return (
      <div
        style={{
          display: 'inline-block',
          backgroundColor: 'lightgray',
          padding: '10px',
          color: 'red',
          fontWeight: 'bold',
        }}
      >
        {error}
      </div>
    );
  }
  if (success) {
    return (
      <div
        style={{
          display: 'inline-block',
          backgroundColor: 'lightgray',
          padding: '10px',
          color: 'green',
          fontWeight: 'bold',
        }}
      >
        {success}
      </div>
    );
  }
  return;
};

export default MessageBox;
