import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const createAPIThunk = (
  apiFunction: any,
  sliceName: string,
  initialState: any
) => {
  const asyncThunk = createAsyncThunk(
    `${sliceName}/apiCall`,
    async (payload: any, { dispatch, getState }) => {
      const response = await apiFunction(payload);
      return response.data?.content;
    }
  );

  const slice = createSlice({
    name: sliceName,
    initialState,
    reducers: {
      // Các reducers khác nếu cần
    },
    extraReducers: (builder) => {
      builder.addCase(asyncThunk.pending, (state) => {
        state.isLoading = true;
      });
      builder.addCase(asyncThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      });
      builder.addCase(asyncThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
    },
  });

  return { asyncThunk, slice };
};

export default createAPIThunk;
