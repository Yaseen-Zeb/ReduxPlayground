import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter-slice";
import  productSlice  from "./slices/product-slice";
import  colorSlice  from "./slices/color-slice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    products: productSlice,
    colors:colorSlice
  },
});
