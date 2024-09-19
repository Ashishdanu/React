import React from 'react'
import { useReducer } from 'react'
const initialValue = 0;

const Reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + action.payload;
    case "decrement":
      return state - action.payload;
    case "RESET":
      return initialValue;
    default:
      return state;
  }
};

function inc(val) {
  return {
    type: "increment",
    payload: val,
  };
}

function dec(val) {
  return {
    type: "decrement",
    payload: val,
  };
}
function Reset(val) {
  return {
    type: "RESET",
    payload: val,
  };
}

const Counter = () => {
    const [count, dispatch] = useReducer(Reducer, initialValue);
  return (
    <div>
        <h1>Counter : {count}</h1>
        <button  onClick={()=> dispatch(inc(1))}>incrememnt</button>
        <button onClick={()=>dispatch(dec(1))}>decrement</button>
        <button onClick={()=> dispatch(Reset(initialValue))}>reset</button>


        <button  onClick={()=> dispatch(inc(5))}>incrememnt By 5</button>
        <button onClick={()=>dispatch(dec(5))}>decrement By 5</button>
      
    </div>
  )
}

export default Counter
