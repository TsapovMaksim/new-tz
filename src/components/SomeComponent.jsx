import React from 'react';

function SomeComponent({ children, text }) {
  return (
    <div>
      {children}
      <p>{text}</p>
    </div>
  );
}

export default SomeComponent;
