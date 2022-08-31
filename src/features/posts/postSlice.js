import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getPosts } from "../../services/api";

const initialState = {
  post: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const getPost = createAsyncThunk("getPost", async (_, thunkAPI) => {
  try {
    const response = await getPost();
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = action.payload;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default postSlice.reducer;
export const { reset } = postSlice.actions;
