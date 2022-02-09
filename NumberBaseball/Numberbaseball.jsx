import React, { useState } from "react";
import Try from "./Try";
// const React = require("react");
// const { Component } = React;

function getNumbers() {
  // 숫자 4개를 겹치지않고 랜덤하게 뽑는 함수
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

const Numberbaseball = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (value === answer.join("")) {
      setResult("홈런");
      setTries((prev) => {
        return [...prev, { try: value, result: "홈런" }];
      });
      alert("게임을 다시 시작합니다");
      /**
       * 게임 새로 시작하니까 초기화
       */
      setValue("");
      setAnswer(getNumbers());
      setTries([]);
    } else {
      // 답 틀렸을 때
      const answerArray = value.split("").map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        // 10번이상 틀렸을 때
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(",")}`);
        alert("게임을 다시 시작합니다");
        /**
         * 게임 새로 시작하니까 초기화
         */
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for (let i = 0; i < 4; i++) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prev) => {
          return [
            ...prev,
            { try: value, result: `${strike} 스트라이크 ${ball} 볼 입니다` },
          ];
        });
        setValue("");
      }
    }
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          maxLength={4}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((item, index) => (
          <Try key={`${index + 1} 차 시도`} tryInfo={item} />
        ))}
      </ul>
    </>
  );
};
export default Numberbaseball;
