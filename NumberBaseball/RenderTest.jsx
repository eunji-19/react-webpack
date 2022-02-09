import React, { Component } from "react";

class RenderTest extends Component {
  state = {
    counter: 0,
  };

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    /**
     * this.state.counter : 현재의 counter
     * nextState.counter : 미래의 바뀌는 counter
     *
     * true => Rendering O
     * false => Rendering X
     */
    if (this.state.counter !== nextState.counter) {
      return true;
    }
    return false;
  }

  onClick = () => {
    this.setState({});
  };

  render() {
    console.log("Rendering", this.state);
    return (
      <>
        <div>RenderTest {this.state.counter}</div>
        <button onClick={this.onClick}>CLICK</button>
      </>
    );
  }
}

export default RenderTest;
