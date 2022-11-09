import { useState } from "react";
import "./App.scss";

function App() {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [signal, setSignal] = useState();

  function inputNum(e: any) {
    let input = e.target.value;
    if (num === 0) setNum(input);
    else setNum(num + input);
  }

  function clear() {
    setNum(0);
  }

  function changeSign() {
    setNum(num * -1);
  }

  function pointer(e: any) {
    setNum(num + e.target.value);
  }

  function percentage() {
    setNum(num / 100);
  }

  function operatorHandle(e: any) {
    setSignal(e.target.value);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    let num1 = oldNum.toString();
    let num2 = num.toString();

    if (signal === "/") setNum(oldNum / num);
    if (signal === "x") setNum(oldNum * num);
    if (signal === "-") setNum(oldNum - num);
    if (signal === "+") setNum(parseFloat(num1) + parseFloat(num2));
  }

  return (
    <div className="App">
      <div className="display">
        <span>{num}</span>
      </div>
      <div className="container">
        <button className="numeric" onClick={clear}>
          AC
        </button>
        <button className="numeric" onClick={changeSign}>
          +/-
        </button>
        <button className="numeric" onClick={percentage}>
          %
        </button>
        <button className="numeric" onClick={operatorHandle} value={"/"}>
          /
        </button>
        <button className="numeric" onClick={inputNum} value={7}>
          7
        </button>
        <button className="numeric" onClick={inputNum} value={8}>
          8
        </button>
        <button className="numeric" onClick={inputNum} value={9}>
          9
        </button>
        <button className="numeric" onClick={operatorHandle} value={"x"}>
          x
        </button>
        <button className="numeric" onClick={inputNum} value={4}>
          4
        </button>
        <button className="numeric" onClick={inputNum} value={5}>
          5
        </button>
        <button className="numeric" onClick={inputNum} value={6}>
          6
        </button>
        <button className="numeric" onClick={operatorHandle} value={"-"}>
          -
        </button>
        <button className="numeric" onClick={inputNum} value={1}>
          1
        </button>
        <button className="numeric" onClick={inputNum} value={2}>
          2
        </button>
        <button className="numeric" onClick={inputNum} value={3}>
          3
        </button>
        <button className="numeric" onClick={operatorHandle} value={"+"}>
          +
        </button>
        <button className="numeric zero" onClick={inputNum} value={0}>
          0
        </button>
        <button className="numeric" onClick={pointer} value={"."}>
          .
        </button>
        <button className="numeric" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
