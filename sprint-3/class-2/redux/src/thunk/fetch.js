const fetchProducts = () => {
  return async (dispatch, getState) => {
    try {
     const response = await fetch("https://fakestoreapi.com/products");
     const data = await response.json();
     dispatch({ type: "FETCH_PRODUCTS", payload: data });
    } catch (error) {
      console.log("Error fetching products" , error);
    }
  };
};
export default fetchProducts;
