// thunk action creator
const fetchProducts = (sortOrder = "asc") => {
  return async (dispatch, getState) => {
    dispatch({
      type: 'LOADING',
      payload: true
      
    });

    try {
      const response = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`
      );
      let data = await response.json();
      
      // Sorting products by price based on sortOrder
      if (sortOrder === "asc") {
        data.data.sort((a, b) => a.price - b.price);
      } else if (sortOrder === "desc") {
        data.data.sort((a, b) => b.price - a.price);
      }

      dispatch({
        type: "SUCCESS",
        payload: data,
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: 'ERROR',
        payload: error,
      });
    }
  };
};

export default fetchProducts;
