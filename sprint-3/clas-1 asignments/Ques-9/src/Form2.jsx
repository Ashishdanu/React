import React from "react";
import { useReducer } from "react";

// initial state

const initialState = {
  email: "",
  password: "",
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "password":
      return { ...state, password: action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error("Invalid Action Type");
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, password } = state;
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log(email, password);
      dispatch({
        type: "reset",
      });
    }
  };
  const InputEmail = (e) => {
    dispatch({ type: "email", payload: e.target.value });
  };
  const InputPassword = (e) => {
    dispatch({ type: "password", payload: e.target.value });
  };

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="enter Your Email"
          value={email}
          onChange={InputEmail}
        />
        <br />
        <input
          type="password"
          placeholder="enter Your Password"
          value={password}
          onChange={InputPassword}
        />
        <br />

        <button type="submit">Submit</button>
      </form>
<hr />
      <div>
        {state.email || state.password ? (
          <p>
            email : {email}
            <br />
            password : {password}
          </p>
        ) : (
          <p>No Details Found</p>
        )}
      </div>
    </>
  );
};

export default Form;
