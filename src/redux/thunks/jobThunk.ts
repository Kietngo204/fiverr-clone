import { getMenuJob, getTypeJob } from "apis/jobAPI";
import createAPIThunk from "./createAPIThunk";

export const { asyncThunk: menuJob, slice: getMenuJobSlice } = createAPIThunk(
  getMenuJob,
  "getMenuJob",
  {
    data: null,
    isLoading: false,
    error: null,
  }
);

export const { asyncThunk: typeJob, slice: getTypeJobSlice } = createAPIThunk(
  getTypeJob,
  "getTypeJob",
  {
    data: null,
    isLoading: false,
    error: null,
  }
);
