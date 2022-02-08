import React, { useState } from "react";
import Try from "./Try";
// const React = require("react");
// const { Component } = React;

function getNumbers() {
  // 숫자 4개를 겹치지않고 랜덤하게 뽑는 함수
}

class Numberbaseball extends React.Component {
  //   state = {
  //     result: "",
  //     value: "",
  //     answer: getNumbers(),
  //     tries: [],
  //   };

  //   onSubmit = (e) => {
  //     e.preventDefault();
  //   };

  constructor(props) {
    super(props);
    this.state = {
      result: "",
      value: "",
      answer: getNumbers(),
      tries: [],
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.value);
  }

  fruits = [
    { fruit: "사과", taste: "빨간색" },
    { fruit: "바나나", taste: "노란색" },
    { fruit: "키위", taste: "녹색" },
    { fruit: "배", taste: "흰색" },
    { fruit: "블루베리", taste: "파란색" },
  ];

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.value}
            maxLength={4}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {/* {[
            ["사과", "빨간색"],
            ["바나나", "노란색"],
            ["키위", "녹색"],
            ["배", "흰색"],
            ["블루베리", "파란색"],
          ].map((item, index) => {
            // 배열 자체가 item이 된다 item = ["사과", "빨간색"]
            return (
              <li key={index}>
                <b>{item[0]}</b> - {item[1]}
              </li>
            );
          })} */}
          {/* {[
            { fruit: "사과", taste: "빨간색" },
            { fruit: "바나나", taste: "노란색" },
            { fruit: "키위", taste: "녹색" },
            { fruit: "배", taste: "흰색" },
            { fruit: "블루베리", taste: "파란색" },
          ].map((item, index) => {
            return (
              <li key={index}>
                <b>{item.fruit}</b> - {item.taste}
              </li>
            );
          })} */}
          {/* return 생략하는 법*/}
          {this.fruits.map((item, index) => (
            // index 만 사용하면 별로 좋은방법 X
            // 배열에서 요소를 추가하거나 수정, 삭제를 하면 index값이 바뀌면서 배열 순서가 변경되어서
            // key값을 판단하는데 문제가 생김
            // <li key={item.fruit + item.taste}>
            //   <b>{item.fruit}</b> - {item.taste}
            // </li>
            <Try key={item.fruit + item.taste} item={item} />
          ))}
        </ul>
      </>
    );
  }
}

export default Numberbaseball;
