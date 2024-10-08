const initialState = 0;
const ReducerCounter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      state;
  }
};

export default ReducerCounter;
