import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./slices/scrollSlice";
import modalReducer from "./slices/modalSlice";
import alertSlice from "./slices/alertSlice";
import userSlice from "./slices/userSlice";
import formSignSlice from "./slices/formSignSlice";
import rootReducers from "./thunks/rootReducers";

const createStore = () => {
  return configureStore({
    reducer: {
      scroll: scrollReducer,
      modal: modalReducer,
      signIn: rootReducers.signIn,
      signUp: rootReducers.signUp,
      alert: alertSlice,
      user: userSlice,
      formSign: formSignSlice,
      getMenu: rootReducers.menuJob,
      getTypeJob: rootReducers.typeJob,
    },
  });
};

export const store = createStore();

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
