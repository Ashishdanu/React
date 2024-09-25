import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../ExpenseRedux/fetchSlice";

const ProductLIst = () => {
  const { data, loading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (

    <>

  
      <h1>Product List</h1>
      <div style={{display:'flex' , justifyContent:'space-between' , flexWrap:'wrap' , gap:'15px'}}>
      {data.map((product) => {
        return (
          <div key={product.id} style={{width:'400px' , height:'400px' , backgroundColor:'gray', textAlign:'center'}}>
            <strong>{product.title}</strong>
            <img src={product.image} alt="" style={{width:'300px' , height:'300px' , margin:'auto', display:'block'}}/>
            <h2>{product.name}</h2>
            <p>{product.price}</p>

          </div>
        );
      })}
    </div>
    </>
  );
};

export default ProductLIst;
