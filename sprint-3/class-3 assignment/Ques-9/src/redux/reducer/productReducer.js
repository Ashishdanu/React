const initialState = {
    loading: false,
    data: [],
    error: "",
  };
  
  const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOADING":
        return { data: [], loading: true, error: "" };
        case "SUCCESS":
          return { data: action.payload, loading: false, error: "" };
          case "ERROR":
              return { data: [], loading: false, error: action.payload };
          default :
          return state;
  
    }
  };
  export default ProductReducer ;
  