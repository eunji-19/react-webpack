const React = require("react");
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState("김석진");
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
      inputRef.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} value={value} onChange={onChangeInput} />
        {/* <input ref={this.onRefInput} defaultValue={this.state.value} /> */}
        <button className="eunji">입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

// class WordRelay extends Component {
//   state = {
//     word: "김석진",
//     value: "",
//     result: "",
//   };

//   // 내가 만든 함수는 무조건 화살표 함수
//   // render처럼 원래 제공하는 함수는 화살표함수 X
//   onSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
//       this.setState({
//         result: "딩동댕",
//         word: this.state.value,
//         value: "",
//       });
//       this.input.focus();
//     } else {
//       this.setState({
//         result: "땡",
//         value: "",
//       });
//       this.input.focus();
//     }
//   };

//   /**
//    * target: 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식 요소를 반환 /실제 이벤트가 발생하는 요소
//    * currentTarget: 이벤트가 부착된 부모의 위치를 반환 / 이벤트 리스너가 달린 요소
//    * <li>
//    *  <button onClick={onClick}>
//    *    <span>Google</Span>
//    *  </button>
//    * </li>
//    *
//    * const onClick = (e)  => {
//    *  console.log(e.target);        // <span>Google</span>
//    *  console.log(e.currentTarget); // <button><span>Google</span></button>
//    * }
//    */
//   onChangeInput = (e) => {
//     this.setState({ value: e.target.value });
//   };

//   input;

//   onRefInput = (context) => {
//     this.input = context;
//   };

//   /**
//    * state 변화될때마다 매번 render() 재실행됨
//    * onSubmit. onChange, onRefInput 함수들이 매번 생성되는게 아니라 참조되는 것
//    */

//   render() {
//     return (
//       <>
//         <div>{this.state.word}</div>
//         <form onSubmit={this.onSubmit}>
//           <input
//             ref={this.onRefInput}
//             value={this.state.value}
//             onChange={this.onChangeInput}
//           />
//           {/* <input ref={this.onRefInput} defaultValue={this.state.value} /> */}
//           <button>입력!</button>
//         </form>
//         <div>{this.state.result}</div>
//       </>
//     );
//   }
// }

module.exports = WordRelay;
