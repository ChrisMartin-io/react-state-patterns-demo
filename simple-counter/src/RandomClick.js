import React, { Component } from 'react';


class RandomClick extends Component {
  constructor(props) {
    super(props);
    this.state = { num: "-" };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(evt) {
    this.setState(
      { num: Math.floor(Math.random() * 10) },
      function after() { console.log("after", this.state) }
    );

    console.log("not yet", this.state);
  }

  render() {
    let num = this.state.num;
    return (
      <button onClick={this.handleClick}>{num}</button>
    );
  }
}
// end-class

export default RandomClick;