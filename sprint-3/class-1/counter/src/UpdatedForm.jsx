import React from "react";
import { useReducer } from "react";

// Initial state (step 1)
const initialState = {
  email: "",
  password: "",
};

// Reducer function (step 2)
const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case "email":
    case "password":
      // Update the specific field based on the action type
      return { ...state, ...action.payload };
    default:
      return state; // Always return state for unknown action types
  }
};

// Action creator function
function updateState(e) {
  return {
    type: e.target.id, // Action type based on input ID
    payload: {
      [e.target.id]: e.target.value, // Update only the changed field
    },
  };
}

const UpdatedForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const { email, password } = state; // Destructure state correctly

  return (
    <div>
      <input
        id="email"
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={(e) => dispatch(updateState(e))}
      />
      <input
        id="password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={(e) => dispatch(updateState(e))}
      />
    </div>
  );
};

export default UpdatedForm;
