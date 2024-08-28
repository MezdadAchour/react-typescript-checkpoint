// Code 02 :

import React, { Component } from 'react'; 
class Counter extends Component { 
  state = {
    count: 0
  }; 
  
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }; 
  
  render() { 
    return ( 
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div>
    ); 
  } 
} 
export default Counter;

//// typescript ////

import React, { Component } from 'react';

// interface pour le state
interface State {
  count: number;
}

// typer le state du composant (pas de props)
class Counter extends Component<{}, State> {
  state: State = {
    count: 0,
  };

  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };
  

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
