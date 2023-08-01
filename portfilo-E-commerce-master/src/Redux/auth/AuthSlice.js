import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const authSingIn = createAsyncThunk(
  "authSingIn",
  async (obj, { dispatch, getState, rejectWithValue, fulfillWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        obj
      );

      return fulfillWithValue(response.data);
      
      
    } catch (error) {
      console.log(error);
      throw rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    userinfo: localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(authSingIn.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authSingIn.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userinfo = action.payload;
    });
    builder.addCase(authSingIn.rejected, (state, action) => {
      console.log("Error", action);
      state.isLoading = false;
      state.message = action.payload;
      state.isError = true;
    });
  },
  reducers: {
    userLogout(state, action) {
      state.userinfo = null;
    },
  },
});


export const { userLogout } = authSlice.actions;
export default authSlice.reducer;
