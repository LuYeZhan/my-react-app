import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Pepe', age: 28 },
      { name: 'Pepa', age: 29 },
      { name: 'Pepo', age: 31 },
    ],
  };

  // switchNameHandler name example of method naming
  switchNameHandler = () => {
    console.log('was clicked!');
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi, I am a react app!</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          My hobbies: are pepehands
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
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
