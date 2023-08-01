import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productData = createAsyncThunk("productData", async () => {
  const respones = await axios("http://localhost:5000/product");
  return respones.data;
});

const products = createSlice({
  name: "products",
  initialState: { isLoading: false, data: [], isError: false },
  extraReducers: (builder) => {
    builder.addCase(productData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(productData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(productData.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

export default products.reducer;
