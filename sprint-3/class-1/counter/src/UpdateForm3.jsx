import React from "react";
import { useReducer } from "react";

// Initial state (step 1)
const initialState = {
  email: "",
  password: "",
  address : {
    at : "" ,
    distict : "" ,
    pin : "" ,
  }
};

// Reducer function (step 2)
const reducer = (state, action) => {
  console.log("action", action);
  switch (action.type) {
    case "email":
    case "password":
      // Update the specific field based on the action type
      return { ...state, ...action.payload };

    case "at":
    case "distict":
    case "pin":
      return { ...state, address: {
        ...state.address,
        ...action.payload ,
      } };
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

const UpdatedForm3 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const { email, password, address :{at , distict ,  pin} } = state; // Destructure state correctly

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

      <br />
      <p>Adderss</p>
      <input
        type="text"
        placeholder="at"
        id="at"
        value={at}
        onChange={(e) => dispatch(updateState(e))}
      />
      <input
        type="text"
        placeholder="distict"
        id="distict"
        value={distict}
        onChange={(e) => dispatch(updateState(e))}
      />
      <input
        type="text"
        placeholder="pin"
        value={pin}
        onChange={(e) => dispatch(updateState(e))}
        id="pin"
      />
    </div>
  );
};

export default UpdatedForm3;
