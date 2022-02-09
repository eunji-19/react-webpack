import React, { memo, useState } from "react";

class Try extends React.PureComponent {
  constructor(props) {
    super(props);

    const filtered = this.props.filter(() => {});

    this.state = {
      result: this.props.tryInfo.result,
    };
  }

  render() {
    const { tryInfo } = this.props;
    return (
      <li>
        <div>{tryInfo.try}</div>
        <div>{tryInfo.result}</div>
      </li>
    );
  }
}

// const Try = memo(({ tryInfo }) => {
//   const [result, setResult] = useState(tryInfo.result);

//   const onClick = () => {
//     setResult("1");
//   };

//   return (
//     <li>
//       <div>{tryInfo.try}</div>
//       <div onClick={onClick}>{result}</div>
//       {/* <div>{tryInfo.result}</div> */}
//     </li>
//   );
// });

export default Try;
