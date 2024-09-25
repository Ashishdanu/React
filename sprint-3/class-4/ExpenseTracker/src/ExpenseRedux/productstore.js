import { configureStore } from "@reduxjs/toolkit";
import fetchSlice  from "./fetchSlice";

const store = configureStore({
  reducer: {
    product: fetchSlice ,
  },
});

export default store;