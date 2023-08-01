import { configureStore } from "@reduxjs/toolkit";
import Products from "../Product/Products";
import CartSlice from "../Cart/CartSlice";
import AuthSlice from "../auth/AuthSlice";


const store = configureStore({
  reducer: {
    products: Products,
    cart: CartSlice,
    auth: AuthSlice,
  },
});

export default store;
