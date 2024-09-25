import React from "react";
import { useReducer } from "react";
// initial state  step 1
const initialState = {
  email: "",
};

// declare reducer
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_PASSWORD":
      return { ...state, password: action.payload };
  }
};

function updateEmail(user_email) {
  return { type: "UPDATE_EMAIL", payload: user_email };
}
function updatepassword(password) {
  return { type: "UPDATE_PASSWORD", payload: password };
}
const NewForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <div>
      <input
        placeholder="enter you email "
        type="email"
        value={state.email}
        onChange={(e) => dispatch(updateEmail(e.target.value))}
      />
      <input
        placeholder="enter you Password "
        type="Password"
        value={state.password}
        onChange={(e) => dispatch(updatepassword(e.target.value))}
      />
    </div>
  );
};

export default NewForm;
