import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { error: "", loading: true, data: [] };
    case "SUCCESS":
      return { error: "", loading: false, data: action.payload };
    case "ERROR":
      return { error: action.payload, loading: false, data: [] };
    default:
      return state; // Always return the current state for unknown action types
  }
};

const DatafetchingReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOADING" }); // Dispatch LOADING action before fetching data

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "SUCCESS", // Correct action type
          payload: json,
        });
      })
      .catch((error) =>
        dispatch({
          type: "ERROR",
          payload: error?.message || "Something went wrong",
        })
      );
  }, []);
  const { data } = state; // Destructure data from state
  if (state.loading) {
    return <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      zIndex: 1000
    }}
  >
    <span
      style={{
        borderBottom: '2px solid #ccc',
        borderTop: '2px solid #ccc',
        borderLeft: '2px solid #ccc',
        borderRight: '2px solid #ccc',
        borderRadius: '50%',
        width: 20,
        height: 20,
        animation: 'spin 1s linear infinite'
      }}
    />
    Loading...
  </div>
  }

  if (state.error) {
    return <div>Error: {state.error}</div>;
  }

  return (
    <div>
      <h1>Data Fetching</h1>
      {data.map((item) => (
        <div key={item.id}> {/* Use unique 'id' instead of 'index' */}
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default DatafetchingReducer;
