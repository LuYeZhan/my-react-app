import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hi, I am a react app!</h1>
        <p>This is really working!</p>
        <Person name='Pepe' age='30' />
        <Person name='pepa' age='29'>
          My hobbies: are pepehands
        </Person>
        <Person name='Pepo' age='31' />
      </div>
    );
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, 'Does this work now?')
    // );
  }
}

export default App;
