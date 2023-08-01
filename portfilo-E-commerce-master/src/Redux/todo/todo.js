import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchData = createAsyncThunk("FetchData" , async () => {
    const respones = await axios("https://jsonplaceholder.typicode.com/posts"); 
    return respones.data
})

const Todo = createSlice({
  name: "Product",
  initialState: { isLoading: false, data:null, isError: false },
  extraReducers: (builder) =>{
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
      builder.addCase(fetchData.rejected, (state, action) => {
        console.log("Error", action.payload);
        state.isError = true;
      });
  },

});

export default Todo.reducer;
