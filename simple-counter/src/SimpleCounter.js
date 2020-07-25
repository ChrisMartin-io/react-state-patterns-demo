import React, { Component } from 'react';


class SimpleCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };

    this.clickUp = this.clickUp.bind(this);
    this.clickDown = this.clickDown.bind(this);
  }

  clickUp(evt) { this.setState(st => ({ num: st.num + 1 })) }

  clickDown(evt) {this.setState(st => ({ num: st.num - 1 })) }

  render() {
    return (
      <div>
        <h3>Count: {this.state.num}</h3>
        <button onClick={this.clickUp}>Up</button>
        <button onClick={this.clickDown}>Down</button>
      </div>
    );
  }
}
// end-class

export default SimpleCounter;