import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    list: localStorage.getItem("product")
      ? JSON.parse(localStorage.getItem("product"))
      : [],
  },
  reducers: {
    add(state, action) {
      state.list.push(action.payload);
    },
    remove(state, action) {
      state.list = state.list.filter((x) => x._id !== action.payload);
    },

    increaseQuantity(state, action) {
      const productFound = state.list.find((x) => x._id === action.payload._id);
      if (productFound) {
        state.list = state.list.map((x) =>
          x._id === action.payload._id ? { ...x, quantity: x.quantity + 1 } : x
        );
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    dicreaseQuantity(state, action) {
      state.list = state.list.map((x) =>
        x._id === action.payload ? { ...x, quantity: x.quantity - 1 } : x
      );
    },

    localDataSave(state, action) {
      state.list = action.payload;
    },
    subTotal(state, action) {
      state.subt = action.payload;
    },

    userInformation(state, action){
      state.shippingDetails = action.payload;
    }
  },
});

export const {
  add,
  remove,
  increaseQuantity,
  dicreaseQuantity,
  localDataSave,
  subTotal,
  userInformation,
} = CartSlice.actions;
export default CartSlice.reducer;
