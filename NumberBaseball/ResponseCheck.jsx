import React from "react";

class ResponseCheck extends React.Component {
  state = {
    state: "waiting",
    message: "클릭해서 시작하세요",
    result: [],
  };

  timeout;
  startTime;
  endTime;

  onClick = () => {
    const { state, message, result } = this.state;

    if (state === "waiting") {
      this.setState({ state: "ready", message: "초록색이 되면 클릭하세요" });
      this.timeout = setTimeout(() => {
        this.setState({
          state: "now",
          message: "지금 클릭!",
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초 ~ 3초 랜덤
    } else if (state === "ready") {
      /**
       * 빨간색일 땐 클릭하면  성급하게 클릭
       * setTimeout을 초기화 해줘야함
       */
      clearTimeout(this.timeout);
      this.setState({
        state: "waiting",
        message: "성급하게 클릭하셨군요",
      });
    } else if (state === "now") {
      /**
       * 반응속도 체크
       */
      this.setState((prev) => {
        return {
          state: "waiting",
          message: "클릭해서 시작하세요",
          result: [...prev.result, this.endTime - this.startTime],
        };
      });
      this.endTime = new Date();
    }
  };

  onClickReset = () => {
    this.setState({ result: [] });
  };

  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      <>
        <div>평균시간 :{result.reduce((a, c) => a + c) / result.length}</div>
        <button onClick={this.onClickReset}>Reset</button>
      </>
    );
  };

  render() {
    return (
      <>
        <div id="screen" className={this.state.state} onClick={this.onClick}>
          {this.state.message}
        </div>
        {this.renderAverage()}
        {/* {this.state.result.length === 0 ? null : (
          <div>
            평균시간 :{" "}
            {this.state.result.reduce((a, c) => a + c) /
              this.state.result.length}
            ms
          </div>
        )} */}
      </>
    );
  }
}

export default ResponseCheck;
