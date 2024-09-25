import React from "react";
import { useSelector, useDispatch } from "react-redux";
import increment from "../redux/actionCounter/increment";
import Decrement from "../redux/actionCounter/decrement";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state);

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(Decrement())}> decrease</button>
    </div>
  );
};

export default Counter;

