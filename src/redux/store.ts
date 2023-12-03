import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./slices/scrollSlice";
import modalReducer from "./slices/modalSlice";
import signInReducer from "./thunks/users/signInThunk";
import alertSlice from "./slices/alertSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    modal: modalReducer,
    signIn: signInReducer,
    alert: alertSlice,
    user: userSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
