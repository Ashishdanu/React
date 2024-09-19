import React from "react";
import { useReducer, useState } from "react";

// initial state
const initialState = {
  email: "",
  password: "",
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "User":
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
      };
    default :
    return state ;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "User",
      payload: {
        email,
        password,
      },
    });
  };

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {state.error && <div>Error: {state.error}</div>} {/* Display error if any */}
      <div>
        <p>Email: {state.email}</p> {/* Display updated email */}
        <p>Password: {state.password}</p> {/* Display updated password */}
      </div>
    </>
  );
};

export default Form;
