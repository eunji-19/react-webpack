import React, { PureComponent } from "react";

class RenderTest extends PureComponent {
  state = {
    counter: 0,
    string: "eunji",
    number: 1,
    boolean: true,
    object: {},
    array: [],
  };

  onClick = () => {
    /**
     * Array 달라진것을 알아차리지 못함 push
     * 새로운 Array로 가고 싶으면 [...prev]
     */
    // const array = this.state.array;
    // array.push(1);
    // this.setState({
    //   array: array,
    // });
    this.setState({
      array: [...this.state.array, 1],
    });
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
