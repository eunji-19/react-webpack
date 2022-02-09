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

// class Numberbaseball extends React.Component {
//   state = {
//     result: "",
//     value: "",
//     answer: getNumbers(), // [1,3,5,7]
//     tries: [], // push쓰면 안돼요
//   };

//   onSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.value === this.state.answer.join("")) {
//       this.setState({
//         result: "홈런",
//         tries: [...this.state.tries, { try: this.state.value, result: "홈런" }], // this.state.tries.push(x)
//       });
//       alert("게임을 다시 시작합니다");
//       /**
//        * 게임 새로 시작하니까 초기화
//        */
//       this.setState({
//         value: "",
//         answer: getNumbers(),
//         tries: [],
//       });
//     } else {
//       // 답 틀렸을 때
//       const answerArray = this.state.value.split("").map((v) => parseInt(v));
//       let strike = 0;
//       let ball = 0;
//       if (this.state.tries.length >= 9) {
//         // 10번이상 틀렸을 때
//         this.setState({
//           result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join(",")}`,
//         });
//         alert("게임을 다시 시작합니다");
//         /**
//          * 게임 새로 시작하니까 초기화
//          */
//         this.setState({
//           value: "",
//           answer: getNumbers(),
//           tries: [],
//         });
//       } else {
//         for (let i = 0; i < 4; i++) {
//           if (answerArray[i] === this.state.answer[i]) {
//             strike += 1;
//           } else if (this.state.answer.includes(answerArray[i])) {
//             ball += 1;
//           }
//         }
//         this.setState({
//           tries: [
//             ...this.state.tries,
//             {
//               try: this.state.value,
//               result: `${strike} 스트라이크 ${ball} 볼 입니다`,
//             },
//           ],
//           value: "",
//         });
//       }
//     }
//   };

//   fruits = [
//     { fruit: "사과", taste: "빨간색" },
//     { fruit: "바나나", taste: "노란색" },
//     { fruit: "키위", taste: "녹색" },
//     { fruit: "배", taste: "흰색" },
//     { fruit: "블루베리", taste: "파란색" },
//   ];

//   render() {
//     return (
//       <>
//         <h1>{this.state.result}</h1>
//         <form onSubmit={this.onSubmit}>
//           <input
//             value={this.state.value}
//             maxLength={4}
//             onChange={(e) => this.setState({ value: e.target.value })}
//           />
//         </form>
//         <div>시도: {this.state.tries.length}</div>
//         <ul>
//           {/* {[
//             ["사과", "빨간색"],
//             ["바나나", "노란색"],
//             ["키위", "녹색"],
//             ["배", "흰색"],
//             ["블루베리", "파란색"],
//           ].map((item, index) => {
//             // 배열 자체가 item이 된다 item = ["사과", "빨간색"]
//             return (
//               <li key={index}>
//                 <b>{item[0]}</b> - {item[1]}
//               </li>
//             );
//           })} */}
//           {/* {[
//             { fruit: "사과", taste: "빨간색" },
//             { fruit: "바나나", taste: "노란색" },
//             { fruit: "키위", taste: "녹색" },
//             { fruit: "배", taste: "흰색" },
//             { fruit: "블루베리", taste: "파란색" },
//           ].map((item, index) => {
//             return (
//               <li key={index}>
//                 <b>{item.fruit}</b> - {item.taste}
//               </li>
//             );
//           })} */}
//           {/* return 생략하는 법*/}
//           {/* {this.fruits.map((item, index) => (
//             // index 만 사용하면 별로 좋은방법 X
//             // 배열에서 요소를 추가하거나 수정, 삭제를 하면 index값이 바뀌면서 배열 순서가 변경되어서
//             // key값을 판단하는데 문제가 생김
//             // <li key={item.fruit + item.taste}>
//             //   <b>{item.fruit}</b> - {item.taste}
//             // </li>
//             <Try key={item.fruit + item.taste} item={item} />
//           ))} */}
//           {this.state.tries.map((item, index) => (
//             <Try key={`${index + 1} 차 시도`} tryInfo={item} />
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

export default Numberbaseball;
