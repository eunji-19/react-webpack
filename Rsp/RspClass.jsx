import React, { Component } from "react";

class RspClass extends Component {
  state = {
    result: "",
    imgCoord: 0,
    score: 0,
  };

  /**
   * Component 첫 렌더링 된 후
   */
  componentDidMount() {
    setInterval(() => {
      console.log("interval");
    }, 1000);
  }

  /**
   * 리렌더링 후
   */
  componentDidUpdate() {}

  /**
   * Component 제거되기 직전
   */
  componentWillUnmount() {}

  onClickBtn = (title) => {};

  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div
          id="computer"
          style={{
            background: `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`,
          }}
        />
        <div>
          <button id="rock" className="btn" onClick={this.onClickBtn("바위")}>
            바위
          </button>
          <button
            id="scissor"
            className="btn"
            onClick={this.onClickBtn("가위")}
          >
            가위
          </button>
          <button id="paper" className="btn" onClick={this.onClickBtn("보")}>
            보
          </button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    );
  }
}

export default RspClass;
