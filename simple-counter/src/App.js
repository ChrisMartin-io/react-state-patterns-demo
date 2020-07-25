import React, { Component } from 'react';
import SimpleCounter from './SimpleCounter';
import RandomClick from "./RandomClick";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Random Click</h1>
        <RandomClick />

        <h1>Simple Counter</h1>
        <SimpleCounter />
      </div>
    );
  }
}

export default App;
