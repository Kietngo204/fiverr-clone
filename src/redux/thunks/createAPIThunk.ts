import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const createAPIThunk = (
  apiFunction: any,
  sliceName: any,
  initialState: any,
  reducers: any = {}
) => {
  const asyncThunk = createAsyncThunk(
    `${sliceName}/apiCall`,
    async (payload: any, { dispatch, getState }) => {
      try {
        let response;
        if (payload !== undefined) {
          response = await apiFunction(payload);
        } else {
          response = await apiFunction(); // Gọi API mà không có tham số
        }
        return response;
      } catch (error: any) {
        throw error.response.data?.content;
      }
    }
  );

  const slice = createSlice({
    name: sliceName,
    initialState,
    reducers,
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
