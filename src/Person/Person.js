import React from 'react';

const person = (props) => {
  return (
    <p>
      I'm {props.name} and I am {props.age} yeards old!
    </p>
  );
};

export default person;
