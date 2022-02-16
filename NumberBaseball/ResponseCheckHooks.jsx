import React, { useRef, useState } from "react";

const ResponseCheckHooks = () => {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요");
  const [result, setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClick = () => {
    if (state === "waiting") {
      setState("ready");
      setMessage("초록색이 되면 클릭하세요");
      timeout.current = setTimeout(() => {
        setState("now");
        setMessage("지금 클릭");
        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초~3초 랜덤
    } else if (state === "ready") {
      /**
       * 빨간색일 땐 클릭하면  성급하게 클릭
       * setTimeout을 초기화 해줘야함
       */
      clearTimeout(timeout.current);
      setState("waiting");
      setMessage("성급하게 클릭하셨군요");
    } else if (state === "now") {
      /**
       * 반응속도 체크
       */
      setState("waiting");
      setMessage("클릭해서 시작하세요");
      setResult((prev) => {
        return [...prev.result, endTime.current - startTime.current];
      });
      endTime.current = new Date();
    }
  };

  const onClickReset = () => {
    setResult([]);
  };

  const renderAverage = () => {
    return result.length === 0 ? null : (
      <>
        <div>평균시간 :{result.reduce((a, c) => a + c) / result.length}</div>
        <button onClick={onClickReset}>Reset</button>
      </>
    );
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClick}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
};

export default ResponseCheckHooks;
