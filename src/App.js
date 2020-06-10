// normal react approach

import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 },
      ],
    });
  };

  nameChangehandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 },
      ],
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Max!')}
          changed={this.nameChangehandler}
        >
          My Hobbies: Racing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

// react Hooks approach

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Pepe', age: 28 },
//       { name: 'Pepa', age: 29 },
//       { name: 'Pepo', age: 31 },
//     ],
//   });

//   const [otherState, setOtherState] = useState('some other value');

//   console.log(personsState, otherState);

//   const switchNameHandler = () => {
//     // console.log('was clicked!');
//     // this.state.persons[0].name = 'pepehands'; Dont do this we shoild use this.setState
//     setPersonsState({
//       persons: [
//         { name: 'Pepeeeee', age: 28 },
//         { name: 'Pepa', age: 29 },
//         { name: 'Pepo', age: 311 },
//       ],
//     });
//   };

//   return (
//     <div className='App'>
//       <h1>Hi, I am a react app!</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       >
//         My hobbies: are pepehands
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
//   // return React.createElement(
//   //   'div',
//   //   { className: 'App' },
//   //   React.createElement('h1', null, 'Does this work now?')
//   // );
// };

// export default app;

// // switchNameHandler name example of method naming
