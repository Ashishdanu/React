import React from "react";
import { useReducer } from "react";

// 1 create initial state
const initialState = 0;
// 2 create reducer
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    //   i am accissing payload by doing action.payload 
    case "Decrement":
      return state - action.payload;
    case "reset":
      return initialState;
  }
}
// 3 create cation
// val is the value that i am passing in the button 
function inc(val) {
  return { type: "INCREMENT"  ,
    payload : val 
  };
}
function dec(val) {
  return { type: "Decrement" ,
    payload : val 
  };
}

// function reset() {
//     return { type: 'reset' }
// }
// for reset i have used another method that will also do the same thing

// to use
// 1 user reducer book
//  2to  change staet we will dispatch actions

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Sher Counter</h1>
      <h1>counet : {state}</h1>
      <button onClick={() => dispatch(inc())}>Increment</button>
      <button onClick={() => dispatch(dec())}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>


      {/* paayload button */}
      <button onClick={() => dispatch(inc(5))}>Increment by 5</button>
      <button onClick={() => dispatch(dec(5))}>Decrement by 5</button>
    </>
  );
};

export default Counter;




// this is the flow 
//1- When you click the Increment button, it triggers dispatch(inc()).
//2- inc() returns { type: "INCREMENT" }.
//3- The dispatch function sends this action to the reducer.
//4- The reducer receives { type: "INCREMENT" } and updates the state by adding 1 to the current state.
//5- The component re-renders with the updated state.



// Summary
// The useReducer hook manages the state using the reducer function.
// Each button click creates an action and dispatches it.
// The reducer function processes the action and updates the state accordingly.
// The component then re-renders to reflect the new state.